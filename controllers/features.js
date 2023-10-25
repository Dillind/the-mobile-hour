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
    ProductsFeatures.getAll().then((productsFeatures) => {
      res.render("product_admin_create_feature.ejs", {
        productsFeatures,
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
