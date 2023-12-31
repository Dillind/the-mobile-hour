// creates a connection with the mobile hour mysql database
import { db_conn } from "../database.js";

export function newProduct(
  id,
  name,
  model,
  manufacturer,
  price,
  stock,
  description,
  last_updated_by_staff_id,
  feature_id
) {
  return {
    id,
    name,
    model,
    manufacturer,
    price,
    stock,
    description,
    last_updated_by_staff_id,
    feature_id,
  };
}

// CREATE
export function create(product) {
  return db_conn.query(
    `INSERT INTO products (product_name, product_model, product_manufacturer, product_price, product_stock, product_description, product_last_updated_by_staff_id, product_feature_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      product.name,
      product.model,
      product.manufacturer,
      product.price,
      product.stock,
      product.description,
      product.last_updated_by_staff_id,
      product.feature_id,
    ]
  );
}

// READ
// Get All
export function getAll() {
  return db_conn
    .query(`SELECT * FROM products WHERE product_removed = 0`)
    .then(([queryResult]) => {
      // convert each result into a model object
      return queryResult.map((result) =>
        newProduct(
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

// Get By Id
export function getById(productID) {
  return db_conn
    .query(`SELECT * FROM products WHERE product_id = ?`, [productID])
    .then(([queryResult]) => {
      // checks that at least 1 product was found
      if (queryResult.length > 0) {
        const result = queryResult[0];

        // convert the result into a model object
        return newProduct(
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
        return Promise.reject("No matching product found");
      }
    });
}

// Get By Search
export function getBySearch(searchTerm) {
  return db_conn
    .query(
      `SELECT * FROM products WHERE product_removed = 0 AND (product_name LIKE ? OR product_description LIKE ? OR product_price LIKE ?)`,
      [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`]
    )
    .then(([queryResult]) => {
      // convert each result into a model object
      return queryResult.map((result) =>
        newProduct(
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

// UPDATE
export function update(product) {
  return db_conn.query(
    `UPDATE products SET product_name = ?, product_model = ?, product_manufacturer = ?, product_price = ?, product_stock = ?, product_description = ?, product_last_updated_by_staff_id = ?, product_feature_id = ? WHERE product_id = ?`,
    [
      product.name,
      product.model,
      product.manufacturer,
      product.price,
      product.stock,
      product.description,
      product.last_updated_by_staff_id,
      product.feature_id,
      product.id,
    ]
  );
}

export function updateStockById(productID, difference) {
  return db_conn.query(
    `UPDATE products SET product_stock = product_stock + ? WHERE product_id = ?`,
    [difference, productID]
  );
}

// DELETE
export function deleteById(productID) {
  // this query does not delete the product entirely to prevent errors with other foreign key connections, it just flags them as removed. Thus, it allows us to hide the "deleted" products, while still maintaining referential integrity with the orders table.
  return db_conn.query(
    `UPDATE products SET product_removed = 1 WHERE product_id = ?`,
    [productID]
  );
}
