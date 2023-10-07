import express from "express";
import * as OrdersProducts from "../models/orders-products.js";
import * as Orders from "../models/orders.js";
import * as Products from "../models/products.js";
import * as Changelog from "../models/changelog.js";
import access_control from "../access_control.js";

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
      validator.escape(formData.product_id),
      validator.escape(formData.customer_first_name),
      validator.escape(formData.customer_last_name),
      validator.escape(formData.customer_phone),
      validator.escape(formData.customer_email),
      // all orders are pending by default
      "pending",
      // gets the current date and time in a MySQL friendly format
      new Date().toISOString().slice(0, 19).replace("T", " ")
    );
    // Save order to database
    Orders.create(newOrder)
      .then(([result]) => {
        res.redirect("/order_confirmation?id=" + result.insertId);
      })
      .catch((error) => {
        // Handle errors
        res.status(500).send(`Failed to create order ${error}`);
      });

    // Changelog entry
    const orderCreatedChangelogEntry = Changelog.newChangelog(
      null,
      null,
      req.session.user.staffId,
      `Order created: ${formData.customer_first_name} ${formData.customer_last_name}`
    );

    Changelog.create(orderCreatedChangelogEntry).catch((error) => {
      console.log("Failed to add to changelog " + orderCreatedChangelogEntry);
    });
  } else {
    // Handle error caused if no body exists
    res.status(400).send("Missing order details in request body");
  }
});

// Get order confirmation details endpoint
orderController.get("/order_confirmation", (req, res) => {
  if (!/[0-9]{1,}/.test(req.query.id)) {
    // Status response for non-valid ID
    res.render("status.ejs", {
      status: "Invalid order ID",
      message: "Please contact the support team.",
    });
    return;
  }

  // Check if the query string has the order id
  if (req.query.id) {
    OrdersProducts.getAllByOrderId(req.query.id)
      .then((orderProduct) => {
        res.render("order_confirmation.ejs", {
          orderProduct,
        });
      })
      .catch((error) => {
        // Handle errors
        res.render("status.ejs", {
          status: "Failed to retrieve order status",
          message: error,
        });
      });
  }
});

orderController.get(
  "/order_admin",
  access_control(["manager", "user"]),
  (req, res) => {
    let orderStatus = req.query.status;
    if (!orderStatus) {
      orderStatus = "pending";
    }

    OrdersProducts.getAllByOrderStatus(orderStatus).then((ordersProducts) => {
      res.render("order_admin.ejs", {
        ordersProducts,
        orderStatus,
        accessRole: req.session.user.accessRole,
      });
    });
  }
);

orderController.post(
  "/order_admin",
  access_control(["manager", "user"]),
  (req, res) => {
    const formData = req.body;
    Orders.updateStatusById(formData.order_id, formData.status).then(
      ([result]) => {
        if (result.affectedRows > 0) {
          res.redirect("/order_admin");
        }
      }
    );
    // Changelog entry
    const orderUpdatedChangelogEntry = Changelog.newChangelog(
      null,
      null,
      req.session.user.staffId,
      `Order ${formData.order_id} status updated to ${formData.status}`
    );

    Changelog.create(orderUpdatedChangelogEntry).catch((error) => {
      console.log("Failed to add to changelog " + orderUpdatedChangelogEntry);
    });
  }
);

orderController.get(
  "/order_admin_create",
  access_control(["manager", "user"]),
  (req, res) => {
    Products.getAll().then((products) => {
      res.render("order_admin_create.ejs", {
        products,
        accessRole: req.session.user.accessRole,
      });
    });
  }
);

export default orderController;
