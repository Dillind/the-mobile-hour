import express from "express";
import * as Products from "../models/products.js";

const productController = express.Router();

// TODO: Write endpoints
productController.get("/product_list", (req, res) => {
  // TODO: Search functionality not working on controller, but working on model.
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
    // Load details of the selected product
    Products.getById(req.query.id)
      .then((product) => {
        // TODO: Render the checkout page view with the selected product
        res.render("product_checkout.ejs", { product });
      })
      .catch((error) => {
        res.status(500).send("An error occurred!" + error);
      });
  }
});

productController.get("/product_admin", (req, res) => {
  res.render("product_admin.ejs");
});

// access control

productController.post("/edit_product");

// access control

export default productController;
