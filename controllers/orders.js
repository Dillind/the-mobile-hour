import express from "express";
import * as OrdersProducts from "../models/orders-products.js";
import * as Orders from "../models/orders.js";
import * as Products from "../models/products.js";

const orderController = express.Router();

// Create order endpoint
orderController.post("/create_order", (req, res) => {
  // Check that we receive form data
  if (req.body) {
    let formData = req.body;

    // Validate data formats
    if (!/[0-9]{1,}/.test(formData.product_id)) {
      res.render("status.ejs", {
        status: "Invalid product ID",
        message: "Please pick another product.",
      });
      return;
    }

    if (!/[a-zA-Z-]{2,}/.test(formData.customer_first_name)) {
      res.render("status.ejs", {
        status: "Invalid first name",
        message: "First name must be letters",
      });
      return;
    }

    if (!/[a-zA-Z-]{2,}/.test(formData.customer_last_name)) {
      res.render("status.ejs", {
        status: "Invalid last name",
        message: "Last name must be letters",
      });
      return;
    }

    if (
      !/(^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$)/.test(
        formData.customer_phone
      )
    ) {
      res.render("status.ejs", {
        status: "Invalid phone number",
        message: "Please enter a valid phone number",
      });
      return;
    }

    if (!/^\S{1,}@\S{1,}[.]\S{1,}$/.test(formData.customer_email)) {
      res.render("status.ejs", {
        status: "Invalid email address",
        message: "Please enter a valid email address",
      });
      return;
    }

    // Construct an order
    const newOrder = Orders.newOrder(
      // new model does not have an ID yet
      null,
      formData.product_id,
      formData.customer_first_name,
      formData.customer_last_name,
      formData.customer_phone,
      formData.customer_email,
      // all orders are pending by default
      "pending",
      // gets the current date and time in a MySQL friendly format
      new Date().toISOString().slice(0, 19).replace("T", " ")
    );
    // Save order to database
    Orders.create(newOrder)
      .then(([result]) => {
        const orderID = result.insertId;
        // Send order details
        res.send(`Order created with id ${orderID}`);
      })
      .catch((error) => {
        //Handle errors
        res.status(500).send(`Failed to create order ${error}`);
      });
  } else {
    // Handle error caused if no body exists
    res.status(400).send("Missing order details in request body");
  }
});

// Get order confirmation details endpoint
orderController.get("/order_confirmation", (req, res) => {
  // Check if the query string has the order id
  if (req.query.id) {
    const orderId = req.query.id;
    // TODO: Validate the id
    // Get order by id
    Orders.getById(orderId)
      .then((order) => {
        // Send back order details
        res.send(
          `The current order status for ${order.customer_first_name} ${order.customer_last_name} is: ${order.status}`
        );
      })
      .catch((error) => {
        // Handle errors
        res.status(500).send(`Failed to get order: ${error}`);
      });
  } else {
    // Handle error caused if no id exists
    res.status(400).send("No such order id exists");
  }
});

orderController.get("/order_admin", (req, res) => {
  res.render("order_admin.ejs");
});

orderController.get("/order_admin_create", (req, res) => {
  Products.getAll().then((products) => {
    res.render("order_admin_create.ejs", { products });
  });
});

export default orderController;
