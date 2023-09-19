// creates a connection with the mobile hour mysql database
import { db_conn } from "../database.js";

// Order model constructor
export function newOrder(
  id,
  product_id,
  customer_first_name,
  customer_last_name,
  customer_phone,
  customer_email,
  status,
  datetime
) {
  return {
    id,
    product_id,
    customer_first_name,
    customer_last_name,
    customer_phone,
    customer_email,
    status,
    datetime,
  };
}

// CREATE

export function create(order) {
  return db_conn.query(
    `INSERT INTO orders (product_id, customer_first_name, customer_last_name, customer_phone, customer_email, order_status, order_datetime), VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      order.product_id,
      order.customer_first_name,
      order.customer_last_name,
      order.customer_phone,
      order.customer_email,
      order.status,
      order.datetime,
    ]
  );
}

// READ

export function getAll() {
  return db_conn.query(`SELECT * FROM orders`).then(([queryResult]) => {
    return queryResult.map((result) =>
      newOrder(
        result.order_id,
        result.product_id,
        result.customer_first_name,
        result.customer_last_name,
        result.customer_phone,
        result.customer_email,
        result.order_status,
        result.order_datetime
      )
    );
  });
}

export function getById(orderID) {
  return db_conn
    .query(
      `
    SELECT * FROM orders WHERE order_id = ?`,
      [orderID]
    )
    .then(([queryResult]) => {
      // checks that at least one order was found
      if (queryResult.length > 0) {
        // get the first matching result
        const result = queryResult[0];
        //  converts the result into a model object
        return newOrder(
          result.order_id,
          result.product_id,
          result.customer_first_name,
          result.customer_last_name,
          result.customer_phone,
          result.customer_email,
          result.order_status,
          result.order_datetime
        );
      } else {
        return Promise.reject("Order not found");
      }
    });
}

// UPDATE

export function updateStatusById(orderID, status) {
  return db_conn.query(
    `UPDATE orders
        SET order_status = ?
        WHERE order_id = ?
        `,
    [status, orderID]
  );
}

// DELETE
export function deleteById(orderID) {
  return db_conn.query(`DELETE FROM orders WHERE order_id = ?`, [orderID]);
}
