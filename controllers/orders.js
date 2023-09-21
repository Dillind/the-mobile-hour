import express from "express";
import * as Orders from "../models/orders.js";

const orderController = express.Router();

// Create order endpoint
orderController.post("/create_order", (req, res) => {
  //Check that we receive form data
  if (req.body) {
    let formData = req.body;
    // TODO: Validate data formats
    // Construct an order
    const newOrder = Orders.newOrder(
      null,
      //   TODO: Sanitise form inputs (i.e. regex)
      formData.product_id,
      formData.customer_first_name,
      formData.customer_last_name,
      formData.customer_phone,
      formData.customer_email,
      "pending",
      new Date().toISOString().slice(0, 19).replace("T", " ")
    );
    // Save order to database
    Orders.create(newOrder)
      .then(([result]) => {
        const orderID = result.insertId;

        // Send order details
        res.status(200).send(`Order created with id ${orderID}`);
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
        res
          .status(200)
          .send(
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

export default orderController;
