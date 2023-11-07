import express from "express";
import access_control from "../access_control.js";
import * as Features from "../models/features.js";
import * as Changelog from "../models/changelog.js";
import validator from "validator";

const featureController = express.Router();

featureController.get(
  "/product_admin_feature",
  access_control(["manager", "user"]),
  (req, res) => {
    const editId = req.query.edit_id;
    if (editId) {
      Features.getById(editId)
        .then((editFeature) => {
          Features.getAll().then((features) => {
            res.render("product_admin_feature.ejs", {
              editFeature,
              features,
              accessRole: req.session.user.accessRole,
            });
          });
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Edit feature not found",
            message: "The edited feature could not be found in the system.",
          });
        });
    } else {
      Features.getAll().then((features) => {
        res.render("product_admin_feature.ejs", {
          features,
          editFeature: Features.newFeature(
            0,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ),
          accessRole: req.session.user.accessRole,
        });
      });
    }
  }
);

featureController.post(
  "/create_feature",
  access_control(["manager", "user"]),
  (req, res) => {
    if (req.body) {
      const formData = req.body;

      // validate data formats
      // feature colour
      if (!/^[a-zA-Z\s-]{2,}$/.test(formData.feature_color)) {
        res.render("status.ejs", {
          status: "Invalid feature colour",
          message: "Feature colour must be letters",
        });
        return;
      }
      // feature weight
      if (!/^\d+(\.\d{1,2})?$/.test(formData.feature_weight)) {
        res.render("status.ejs", {
          status: "Invalid feature weight",
          message: "Feature weight must be numbers only",
        });
        return;
      }
      // feature dimensions
      if (
        !/^(\d+(\.\d+)?\s*x\s*)+\d+(\.\d+)?$/.test(formData.feature_dimensions)
      ) {
        res.render("status.ejs", {
          status: "Invalid feature dimensions",
          message:
            "Feature dimensions must be numbers with an 'x' between each number to indicate different lengths",
        });
        return;
      }
      // feature OS
      if (!/^[a-zA-Z0-9\s\-,.()]+$/.test(formData.feature_OS)) {
        res.render("status.ejs", {
          status: "Invalid feature OS",
          message: "Feature OS must be letters and numbers",
        });
        return;
      }
      // feature screensize
      if (!/^\d+(\.\d{1,2})?$/.test(formData.feature_screensize)) {
        res.render("status.ejs", {
          status: "Invalid feature screensize",
          message: "Feature screensize must be in numbers",
        });
        return;
      }
      // feature resolution
      if (!/^\d+\s*x\s*\d+$/.test(formData.feature_resolution)) {
        res.render("status.ejs", {
          status: "Invalid feature resolution",
          message:
            "Feature resolution must be numbers with an 'x' between each number to indicate different lengths",
        });
        return;
      }
      // feature CPU
      if (!/^[a-zA-Z0-9\s\-,.()+*]+$/.test(formData.feature_CPU)) {
        res.render("status.ejs", {
          status: "Invalid feature CPU",
          message: "Feature CPU must be letters and numbers",
        });
        return;
      }
      // feature RAM
      if (!/^\d+$/.test(formData.feature_RAM)) {
        res.render("status.ejs", {
          status: "Invalid feature RAM",
          message: "Feature RAM must be numbers",
        });
        return;
      }
      // feature storage
      if (!/^\d+$/.test(formData.feature_storage)) {
        res.render("status.ejs", {
          status: "Invalid feature storage",
          message: "Feature storage must be numbers",
        });
        return;
      }
      // feature battery
      if (!/^\d+$/.test(formData.feature_battery)) {
        res.render("status.ejs", {
          status: "Invalid feature battery",
          message: "Feature battery must be numbers",
        });
        return;
      }
      // feature rear camera
      if (!/^\d+(\.\d{1,2})?$/.test(formData.feature_rear_camera)) {
        res.render("status.ejs", {
          status: "Invalid feature rear camera",
          message: "Feature rear camera must be numbers",
        });
        return;
      }
      // feature front camera
      if (!/^\d+(\.\d{1,2})?$/.test(formData.feature_front_camera)) {
        res.render("status.ejs", {
          status: "Invalid feature front camera",
          message: "Feature front camera must be numbers",
        });
        return;
      }
      // sanitise data formats
      const newFeature = Features.newFeature(
        null,
        validator.escape(formData.feature_color),
        validator.escape(formData.feature_weight),
        validator.escape(formData.feature_dimensions),
        validator.escape(formData.feature_OS),
        validator.escape(formData.feature_screensize),
        validator.escape(formData.feature_resolution),
        validator.escape(formData.feature_CPU),
        validator.escape(formData.feature_RAM),
        validator.escape(formData.feature_storage),
        validator.escape(formData.feature_battery),
        validator.escape(formData.feature_rear_camera),
        validator.escape(formData.feature_front_camera)
      );

      // Save order to database
      Features.create(newFeature)
        .then(([result]) => {
          res.redirect("/product_admin_feature");
        })
        .catch((error) => {
          // Handle errors
          res.status(500).send(`Failed to create feature ${error}`);
        });

      // Changelog entry
      const featureChangelogEntry = Changelog.newChangelog(
        null,
        null,
        req.session.user.staffId,
        "Feature created"
      );

      Changelog.create(featureChangelogEntry).catch((error) => {
        console.log("Failed to add to changelog " + featureChangelogEntry);
      });
    } else {
      // Handle error caused if no body exists

      res.status(400).send("Missing feature details in request body");
    }
  }
);

featureController.get(
  "/product_admin_create_feature",
  access_control(["manager", "user"]),
  (req, res) => {
    Features.getAll().then((features) => {
      res.render("product_admin_create_feature.ejs", {
        features,
        accessRole: req.session.user.accessRole,
      });
    });
  }
);

featureController.post(
  "/edit_feature",
  access_control(["manager", "user"]),
  (req, res) => {
    const formData = req.body;

    // validate data formats
    // feature colour
    if (!/^[a-zA-Z\s-]{2,}$/.test(formData.color)) {
      res.render("status.ejs", {
        status: "Invalid feature colour",
        message: "Feature colour must be letters",
      });
      return;
    }
    // feature weight
    if (!/^\d+(\.\d{1,2})?$/.test(formData.weight)) {
      res.render("status.ejs", {
        status: "Invalid feature weight",
        message: "Feature weight must be numbers only",
      });
      return;
    }
    // feature dimensions
    if (!/^(\d+(\.\d+)?\s*x\s*)+\d+(\.\d+)?$/.test(formData.dimensions)) {
      res.render("status.ejs", {
        status: "Invalid feature dimensions",
        message:
          "Feature dimensions must be numbers with an 'x' between each number to indicate different lengths",
      });
      return;
    }
    // feature OS
    if (!/^[a-zA-Z0-9\s\-,.()]+$/.test(formData.OS)) {
      res.render("status.ejs", {
        status: "Invalid feature OS",
        message: "Feature OS must be letters and numbers",
      });
      return;
    }
    // feature screensize
    if (!/^\d+(\.\d{1,2})?$/.test(formData.screensize)) {
      res.render("status.ejs", {
        status: "Invalid feature screensize",
        message: "Feature screensize must be in numbers",
      });
      return;
    }
    // feature resolution
    if (!/^\d+\s*x\s*\d+$/.test(formData.resolution)) {
      res.render("status.ejs", {
        status: "Invalid feature resolution",
        message:
          "Feature resolution must be numbers with an 'x' between each number to indicate different lengths",
      });
      return;
    }
    // feature CPU
    if (!/^[a-zA-Z0-9\s\-,.()+*]+$/.test(formData.CPU)) {
      res.render("status.ejs", {
        status: "Invalid feature CPU",
        message: "Feature CPU must be letters and numbers",
      });
      return;
    }
    // feature RAM
    if (!/^\d+$/.test(formData.RAM)) {
      res.render("status.ejs", {
        status: "Invalid feature RAM",
        message: "Feature RAM must be numbers",
      });
      return;
    }
    // feature storage
    if (!/^\d+$/.test(formData.storage)) {
      res.render("status.ejs", {
        status: "Invalid feature storage",
        message: "Feature storage must be numbers",
      });
      return;
    }
    // feature battery
    if (!/^\d+$/.test(formData.battery)) {
      res.render("status.ejs", {
        status: "Invalid feature battery",
        message: "Feature battery must be numbers",
      });
      return;
    }
    // feature rear camera
    if (!/^\d+(\.\d{1,2})?$/.test(formData.rear_camera)) {
      res.render("status.ejs", {
        status: "Invalid feature rear camera",
        message: "Feature rear camera must be numbers",
      });
      return;
    }
    // feature front camera
    if (!/^\d+(\.\d{1,2})?$/.test(formData.front_camera)) {
      res.render("status.ejs", {
        status: "Invalid feature front camera",
        message: "Feature front camera must be numbers",
      });
      return;
    }

    const editedFeature = Features.newFeature(
      validator.escape(formData.feature_id),
      validator.escape(formData.color),
      validator.escape(formData.weight),
      validator.escape(formData.dimensions),
      validator.escape(formData.OS),
      validator.escape(formData.screensize),
      validator.escape(formData.resolution),
      validator.escape(formData.CPU),
      validator.escape(formData.RAM),
      validator.escape(formData.storage),
      validator.escape(formData.battery),
      validator.escape(formData.rear_camera),
      validator.escape(formData.front_camera)
    );

    if (formData.action == "create") {
      Features.create(editedFeature)
        .then(([result]) => {
          res.redirect("/product_admin_create_feature");
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Failed to create",
            message: "Database failed to create the feature",
          });
        });
    } else if (formData.action == "update") {
      Features.update(editedFeature)
        .then(([result]) => {
          res.redirect("/product_admin_feature");
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Failed to update",
            message: "Database failed to update the feature",
          });
        });
    } else if (formData.action == "delete") {
      Features.deleteById(editedFeature.id)
        .then(([result]) => {
          res.redirect("/product_admin_feature");
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Failed to delete",
            message: "Database failed to delete the feature",
          });
        });
    }

    // Changelog entry
    const featureUpdatedChangelogEntry = Changelog.newChangelog(
      null,
      null,
      req.session.user.staffId,
      `${req.session.user.accessRole} ${formData.action}d feature`
    );

    Changelog.create(featureUpdatedChangelogEntry).catch((error) => {
      console.log("Failed to add to changelog " + featureUpdatedChangelogEntry);
    });
  }
);

export default featureController;
