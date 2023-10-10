import { db_conn } from "../database.js";

export function newProductStaff(
  product_id,
  product_name,
  product_model,
  product_manufacturer,
  product_price,
  product_stock,
  product_description,
  product_last_updated_by_staff_id,
  product_feature_id,
  staff_id,
  staff_first_name,
  staff_last_name,
  staff_access_role,
  staff_username,
  staff_password
) {
  return {
    product_id,
    product_name,
    product_model,
    product_manufacturer,
    product_price,
    product_stock,
    product_description,
    product_last_updated_by_staff_id,
    product_feature_id,
    staff_id,
    staff_first_name,
    staff_last_name,
    staff_access_role,
    staff_username,
    staff_password,
  };
}

export function getAll() {
  return db_conn
    .query(
      `SELECT * FROM products INNER JOIN staff ON products.product_last_updated_by_staff_id = staff.staff_id WHERE product_removed = 0`
    )
    .then(([queryResult]) => {
      return queryResult.map((result) =>
        newProductStaff(
          result.product_id,
          result.product_name,
          result.product_model,
          result.product_manufacturer,
          result.product_price,
          result.product_stock,
          result.product_description,
          result.product_last_updated_by_staff_id,
          result.product_feature_id,
          result.staff_id,
          result.staff_first_name,
          result.staff_last_name,
          result.staff_access_role,
          result.staff_username,
          result.staff_password
        )
      );
    });
}
