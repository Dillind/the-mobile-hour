import { db_conn } from "../database.js";

export function newOrderProduct(
  order_id,
  customer_first_name,
  customer_last_name,
  customer_phone,
  customer_email,
  order_status,
  order_datetime,
  product_id,
  product_name,
  product_model,
  product_manufacturer,
  product_price,
  product_stock,
  product_description,
  product_last_updated_by_staff_id,
  product_feature_id
) {
  return {
    order_id,
    customer_first_name,
    customer_last_name,
    customer_phone,
    customer_email,
    order_status,
    order_datetime,
    product_id,
    product_name,
    product_model,
    product_manufacturer,
    product_price,
    product_stock,
    product_description,
    product_last_updated_by_staff_id,
    product_feature_id,
  };
}

export function getAllByOrderStatus(status) {
  return db_conn
    .query(
      `
        SELECT * FROM orders INNER JOIN products ON orders.product_id = products.product_id WHERE orders.order_status = ?`,
      [status]
    )
    .then(([queryResult]) => {
      return queryResult.map((result) =>
        newOrderProduct(
          result.order_id,
          result.customer_first_name,
          result.customer_last_name,
          result.customer_phone,
          result.customer_email,
          result.order_status,
          result.order_datetime,
          result.product_id,
          result.product_name,
          result.product_model,
          result.product_manufacturer,
          result.product_price,
          result.product_stock,
          result.product_description,
          result.product_last_updated_by_staff_id,
          result.product_feature_id
        )
      );
    });
}

export function getAllByOrderId(orderID) {
  return db_conn
    .query(
      `SELECT * FROM orders INNER JOIN products ON orders.product_id = products.product_id WHERE orders.order_id = ?`,
      [orderID]
    )
    .then(([queryResult]) => {
      if (queryResult.length > 0) {
        const result = queryResult[0];

        return newOrderProduct(
          result.order_id,
          result.customer_first_name,
          result.customer_last_name,
          result.customer_phone,
          result.customer_email,
          result.order_status,
          result.order_datetime,
          result.product_id,
          result.product_name,
          result.product_model,
          result.product_manufacturer,
          result.product_price,
          result.product_stock,
          result.product_description,
          result.product_last_updated_by_staff_id,
          result.product_feature_id
        );
      } else {
        return Promise.reject("No matching results");
      }
    });
}
