import express from "express";
import * as Products from "../models/products.js";

const productController = express.Router();

// TODO: Write endpoints
productController.get("/product_list", (req, res) => {
  if (req.query.search_term) {
  }
  Products.getAll()
    .then((products) => {
      res.status(200).render("product_list.ejs", { products });
    })
    .catch((error) => {
      res.status(500).send("Something went wrong!" + error);
    });
});

export default productController;
