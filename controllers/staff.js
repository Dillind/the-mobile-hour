import bcrypt from "bcryptjs";
import express from "express";
import access_control from "../access_control.js";
import validator from "validator";

import * as Staff from "../models/staff.js";
import * as Changelog from "../models/changelog.js";

const staffController = express.Router();

staffController.get("/staff_login", (req, res) => {
  res.render("staff_login.ejs");
});

staffController.post("/staff_login", (req, res) => {
  const login_username = req.body.username;
  const login_password = req.body.password;

  Staff.getByUsername(login_username)
    .then((staff) => {
      if (bcrypt.compareSync(login_password, staff.password)) {
        req.session.user = {
          staffId: staff.id,
          accessRole: staff.access_role,
        };

        // Changelog entry
        const staffChangelogEntry = Changelog.newChangelog(
          null,
          null,
          req.session.user.staffId,
          `${staff.username} logged in`
        );

        Changelog.create(staffChangelogEntry).catch((error) => {
          console.log("Failed to add to changelog " + staffChangelogEntry);
        });

        // If successful, redirect to order admin page
        res.redirect("/order_admin");
      } else {
        res.render("status.ejs", {
          status: "Login Failed",
          message: "Invalid password",
        });
      }
    })
    .catch((error) => {
      res.render("status.ejs", {
        status: "Staff member not found",
        message: error,
      });
    });
});

staffController.get("/staff_logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

staffController.get("/staff_admin", access_control(["manager"]), (req, res) => {
  const editID = req.query.edit_id;

  if (editID) {
    Staff.getById(editID).then((editStaff) => {
      Staff.getAll().then((allStaff) => {
        res.render("staff_admin.ejs", {
          allStaff,
          editStaff,
          accessRole: req.session.user.accessRole,
        });
      });
    });
  } else {
    Staff.getAll().then((allStaff) => {
      res.render("staff_admin.ejs", {
        allStaff,
        editStaff: Staff.newStaff(0, "", "", "", "", ""),
        accessRole: req.session.user.accessRole,
      });
    });
  }
});

staffController.post("/edit_staff", access_control(["manager"]), (req, res) => {
  const formData = req.body;

  if (!/[a-zA-Z-]{2,}/.test(formData.first_name)) {
    // show the error
    res.render("status.ejs", {
      status: "Invalid first name",
      message: "First name must be letters",
    });
    // and stop here
    return;
  }

  if (!/[a-zA-Z-]{2,}/.test(formData.last_name)) {
    res.render("status.ejs", {
      status: "Invalid last name",
      message: "Last name must be letters",
    });
    return;
  }

  if (!/[a-zA-Z0-9-]{6,}/.test(formData.password)) {
    res.render("status.ejs", {
      status: "Invalid password",
      message:
        "Password must be at least 6 characters long and contain a variety of characters.",
    });
    return;
  }

  // Create a staff model object to represent the staff member submitted
  const editStaff = Staff.newStaff(
    validator.escape(formData.staff_id),
    validator.escape(formData.first_name),
    validator.escape(formData.last_name),
    validator.escape(formData.access_role),
    validator.escape(formData.username),
    formData.password
  );

  // hash the password if it hasn't already been hashed
  if (!editStaff.password.startsWith("$2a")) {
    editStaff.password = bcrypt.hashSync(editStaff.password);
  }

  // Determine and run CRUD operation
  if (formData.action == "create") {
    Staff.create(editStaff).then(([result]) => {
      res.redirect("/staff_admin");
    });
  } else if (formData.action == "update") {
    Staff.update(editStaff).then(([result]) => {
      res.redirect("/staff_admin");
    });
  } else if (formData.action == "delete") {
    Staff.deleteById(editStaff.id)
      .then(([result]) => {
        res.redirect("/staff_admin");
      })
      .catch((error) => {
        res.render("status.ejs", {
          status: "Failed to delete",
          message: "Database failed to delete the staff member.",
        });
      });
  }

  // Changelog entry
  const staffUpdatedChangelogEntry = Changelog.newChangelog(
    null,
    null,
    req.session.user.staffId,
    `${req.session.user.accessRole} ${formData.action}d staff member: ${formData.first_name} ${formData.last_name}`
  );

  Changelog.create(staffUpdatedChangelogEntry).catch((error) => {
    console.log("Failed to add to changelog " + staffUpdatedChangelogEntry);
  });
});

export default staffController;
