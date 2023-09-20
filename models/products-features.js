import { db_conn } from "../database.js";

export function newProductFeature(
  product_id,
  product_name,
  product_model,
  product_manufacturer,
  product_price,
  product_stock,
  product_description,
  product_last_updated_by_staff_id,
  product_feature_id,
  feature_id,
  feature_weight,
  feature_dimensions,
  feature_OS,
  feature_screensize,
  feature_resolution,
  feature_CPU,
  feature_RAM,
  feature_storage,
  feature_battery,
  feature_rear_camera,
  feature_front_camera
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
    feature_id,
    feature_weight,
    feature_dimensions,
    feature_OS,
    feature_screensize,
    feature_resolution,
    feature_CPU,
    feature_RAM,
    feature_storage,
    feature_battery,
    feature_rear_camera,
    feature_front_camera,
  };
}

export function getAll() {
  return db_conn
    .query(
      `SELECT * FROM products INNER JOIN feature ON products.product_feature_id = feature.feature_id`
    )
    .then(([queryResult]) => {
      return queryResult.map((result) =>
        newProductFeature(
          result.product_id,
          result.product_name,
          result.product_model,
          result.product_manufacturer,
          result.product_price,
          result.product_stock,
          result.product_description,
          result.product_last_updated_by_staff_id,
          result.product_feature_id,
          result.feature_id,
          result.feature_weight,
          result.feature_dimensions,
          result.feature_OS,
          result.feature_screensize,
          result.feature_resolution,
          result.feature_CPU,
          result.feature_RAM,
          result.feature_storage,
          result.feature_battery,
          result.feature_rear_camera,
          result.feature_front_camera
        )
      );
    });
}
