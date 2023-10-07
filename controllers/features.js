import express from "express";
import access_control from "../access_control.js";
import * as ProductsFeatures from "../models/products-features.js";
import * as Features from "../models/features.js";
import * as Changelog from "../models/changelog.js";

const featureController = express.Router();

featureController.get(
  "/product_admin_feature",
  access_control(["manager", "user"]),
  (req, res) => {
    const editID = req.query.edit_id;
    if (editID) {
      Features.getById(editID)
        .then((editFeature) => {
          ProductsFeatures.getAll().then((productsFeatures) => {
            res.render("product_admin_feature.ejs", {
              editFeature,
              productsFeatures,
              accessRole: req.session.user.accessRole,
            });
          });
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Edit feature not found",
            message: error,
          });
        });
    } else {
      ProductsFeatures.getAll().then((productsFeatures) => {
        res.render("product_admin_feature.ejs", {
          productsFeatures,
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
      let formData = req.body;

      const newFeature = Features.newFeature(
        null,
        formData.feature_color,
        formData.feature_weight,
        formData.feature_dimensions,
        formData.feature_OS,
        formData.feature_screensize,
        formData.feature_resolution,
        formData.feature_CPU,
        formData.feature_RAM,
        formData.feature_storage,
        formData.feature_battery,
        formData.feature_rear_camera,
        formData.feature_front_camera
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
      formData.feature_id,
      formData.color,
      formData.weight,
      formData.dimensions,
      formData.OS,
      formData.screensize,
      formData.resolution,
      formData.CPU,
      formData.RAM,
      formData.storage,
      formData.battery,
      formData.rear_camera,
      formData.front_camera
    );

    if (formData.action == "create") {
      Features.create(editedFeature).then(([result]) => {
        res.redirect("/product_admin_create_feature");
      });
    } else if (formData.action == "update") {
      Features.update(editedFeature).then(([result]) => {
        res.redirect("/product_admin_feature");
      });
    } else if (formData.action == "delete") {
      Features.deleteById(editedFeature.id).then(([result]) => {
        res.redirect("/product_admin_feature");
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
