import express from "express";
import access_control from "../access_control.js";
import validator from "validator";
import * as Products from "../models/products.js";
import * as ProductsStaff from "../models/products-staff.js";
import * as Features from "../models/features.js";
import * as Changelog from "../models/changelog.js";

const productController = express.Router();

productController.get("/product_list", (req, res) => {
  if (req.query.search_term) {
    Products.getBySearch(req.query.search_term)
      .then((products) => {
        res.render("product_list.ejs", { products });
        console.log("Success!");
      })
      .catch((error) => {
        res.status(500).send("An error occurred!" + error);
        console.log("Error!");
      });
  } else {
    Products.getAll()
      .then((products) => {
        res.render("product_list.ejs", { products });
      })
      .catch((error) => {
        res.status(500).send("An error occurred!" + error);
      });
  }
});

productController.get("/product_checkout", (req, res) => {
  //  Check if there is a selected product in the URL
  if (req.query.id) {
    if (!/[0-9]{1,}/.test(req.query.id)) {
      res.render("status.ejs", {
        status: "Invalid Product ID",
        message: "Please pick another product.",
      });
    }
    // Load details of the selected product
    Products.getById(req.query.id)
      .then((product) => {
        res.render("product_checkout.ejs", { product });
      })
      .catch((error) => {
        res.render("status.ejs", {
          status: "Product not found",
          message: error,
        });
      });
  }
});

productController.get(
  "/product_admin",
  access_control(["manager", "user"]),
  (req, res) => {
    const editID = req.query.edit_id;
    if (editID) {
      Products.getById(editID)
        .then((editProduct) => {
          ProductsStaff.getAll().then((productsStaff) => {
            Features.getAll().then((features) => {
              res.render("product_admin.ejs", {
                editProduct,
                features,
                productsStaff,
                accessRole: req.session.user.accessRole,
              });
            });
          });
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Edit product not found",
            message: error,
          });
        });
    } else {
      ProductsStaff.getAll().then((productsStaff) => {
        Features.getAll().then((features) => {
          res.render("product_admin.ejs", {
            productsStaff,
            features,
            // id, name, model, manufacturer, price, stock, description, staff_id, feature_id
            editProduct: Products.newProduct(0, "", "", "", 0, 0, "", 0, 0),
            accessRole: req.session.user.accessRole,
          });
        });
      });
    }
  }
);

// Create order endpoint
productController.post(
  "/create_product",
  access_control(["manager", "user"]),
  (req, res) => {
    // Check that we receive form data
    if (req.body) {
      let formData = req.body;
      // Validate data formats
      // product name
      if (!/[a-zA-Z-]{2,}/.test(formData.product_name)) {
        res.render("status.ejs", {
          status: "Invalid product name",
          message: "Product name must be letters",
        });
        return;
      }
      // product model
      if (!/[a-zA-Z-]{2,}/.test(formData.product_model)) {
        res.render("status.ejs", {
          status: "Invalid product model name",
          message: "Product model must be letters",
        });
        return;
      }
      // product manufacturer
      if (!/[a-zA-Z-]{2,}/.test(formData.product_manufacturer)) {
        res.render("status.ejs", {
          status: "Invalid product manufacturer name",
          message: "Product manufacturer must be letters",
        });
        return;
      }
      // product price
      if (!/^\d+(\.\d{1,2})?$/.test(formData.product_price)) {
        res.render("status.ejs", {
          status: "Invalid product price",
          message:
            "Product price must be a positive number with up to two decimal places.",
        });
        return;
      }
      // product stock
      if (!/^\d+$/.test(formData.product_stock)) {
        res.render("status.ejs", {
          status: "Invalid product stock",
          message: "Product stock must be a non-negative integer.",
        });
        return;
      }

      // sanitise data formats
      const newProduct = Products.newProduct(
        // new model does not have an ID yet
        null,
        validator.escape(formData.product_name),
        validator.escape(formData.product_model),
        validator.escape(formData.product_manufacturer),
        validator.escape(formData.product_price),
        validator.escape(formData.product_stock),
        validator.escape(formData.product_description),
        req.session.user.staffId,
        formData.product_feature_id
      );

      // Save order to database
      Products.create(newProduct)
        .then(([result]) => {
          res.redirect("/product_admin");
        })
        .catch((error) => {
          // Handle errors
          res.status(500).send(`Failed to create product ${error}`);
        });

      // Changelog entry
      const productCreatedChangelogEntry = Changelog.newChangelog(
        null,
        null,
        req.session.user.staffId,
        `Product created: ${formData.product_name}`
      );

      Changelog.create(productCreatedChangelogEntry).catch((error) => {
        console.log(
          "Failed to add to changelog " + productCreatedChangelogEntry
        );
      });
    } else {
      // Handle error caused if no body exists
      res.status(400).send("Missing product details in request body");
    }
  }
);

productController.get(
  "/product_admin_create",
  access_control(["manager", "user"]),
  (req, res) => {
    Features.getAll().then((features) => {
      res.render("product_admin_create.ejs", {
        features,
        accessRole: req.session.user.accessRole,
      });
    });
  }
);

productController.post(
  "/edit_product",
  access_control(["manager", "user"]),
  (req, res) => {
    const formData = req.body;

    // Validate data formats
    // product name
    if (!/[a-zA-Z-]{2,}/.test(formData.name)) {
      res.render("status.ejs", {
        status: "Invalid product name",
        message: "Product name must be letters",
      });
      return;
    }
    // product model
    if (!/[a-zA-Z-]{2,}/.test(formData.model)) {
      res.render("status.ejs", {
        status: "Invalid product model name",
        message: "Product model must be letters",
      });
      return;
    }
    // product manufacturer
    if (!/[a-zA-Z-]{2,}/.test(formData.product_manufacturer)) {
      res.render("status.ejs", {
        status: "Invalid product manufacturer name",
        message: "Product manufacturer must be letters",
      });
      return;
    }
    // product price
    if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
      res.render("status.ejs", {
        status: "Invalid product price",
        message:
          "Product price must be a positive number with up to two decimal places.",
      });
      return;
    }
    // product stock
    if (!/^\d+$/.test(formData.stock)) {
      res.render("status.ejs", {
        status: "Invalid product stock",
        message: "Product stock must be a non-negative integer.",
      });
      return;
    }

    const editedProduct = Products.newProduct(
      validator.escape(formData.product_id),
      validator.escape(formData.name),
      validator.escape(formData.model),
      validator.escape(formData.manufacturer),
      validator.escape(formData.price),
      validator.escape(formData.stock),
      validator.escape(formData.description),
      req.session.user.staffId,
      validator.escape(formData.feature_id)
    );

    if (formData.action == "create") {
      Products.create(editedProduct)
        .then(([result]) => {
          res.redirect("/product_admin");
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Failed to create",
            message: "Database failed to create the product",
          });
        });
    } else if (formData.action == "update") {
      Products.update(editedProduct)
        .then(([result]) => {
          res.redirect("/product_admin");
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Failed to update",
            message: "Database failed to update the product",
          });
        });
    } else if (formData.action == "delete") {
      Products.deleteById(editedProduct.id)
        .then(([result]) => {
          res.redirect("/product_admin");
        })
        .catch((error) => {
          res.render("status.ejs", {
            status: "Failed to delete",
            message: "Database failed to delete the product.",
          });
        });
    }

    // Changelog entry
    const productUpdatedChangelogEntry = Changelog.newChangelog(
      null,
      null,
      req.session.user.staffId,
      `${req.session.user.accessRole} ${formData.action}d product: ${formData.name}`
    );

    Changelog.create(productUpdatedChangelogEntry).catch((error) => {
      console.log("Failed to add to changelog " + productUpdatedChangelogEntry);
    });
  }
);

export default productController;
