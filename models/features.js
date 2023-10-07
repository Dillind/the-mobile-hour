// creates a connection with the mobile hour mysql database
import { db_conn } from "../database.js";

export function newFeature(
  id,
  color,
  weight,
  dimensions,
  OS,
  screensize,
  resolution,
  CPU,
  RAM,
  storage,
  battery,
  rear_camera,
  front_camera
) {
  return {
    id,
    color,
    weight,
    dimensions,
    OS,
    screensize,
    resolution,
    CPU,
    RAM,
    storage,
    battery,
    rear_camera,
    front_camera,
  };
}

// CREATE
export function create(feature) {
  return db_conn.query(
    `INSERT INTO feature (feature_color, feature_weight, feature_dimensions, feature_OS, feature_screensize, feature_resolution, feature_CPU, feature_RAM, feature_storage, feature_battery, feature_rear_camera, feature_front_camera) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      feature.color,
      feature.weight,
      feature.dimensions,
      feature.OS,
      feature.screensize,
      feature.resolution,
      feature.CPU,
      feature.RAM,
      feature.storage,
      feature.battery,
      feature.rear_camera,
      feature.front_camera,
    ]
  );
}

// READ
// Get All
export function getAll() {
  return db_conn.query(`SELECT * FROM feature`).then(([queryResult]) => {
    // convert each result into a model object
    return queryResult.map((result) =>
      newFeature(
        result.feature_id,
        result.feature_color,
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

// Get By Id
export function getById(featureId) {
  return db_conn
    .query(`SELECT * FROM feature WHERE feature_id = ?`, [featureId])
    .then(([queryResult]) => {
      // checks that at least 1 result was found
      if (queryResult.length > 0) {
        const result = queryResult[0];

        // convert the result into a model object
        return newFeature(
          result.feature_id,
          result.feature_color,
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
        );
      } else {
        return Promise.reject("No matching feature found");
      }
    });
}

// UPDATE
export function update(feature) {
  return db_conn.query(
    `UPDATE feature SET feature_color = ?, feature_weight = ?, feature_dimensions = ?, feature_OS = ?, feature_screensize = ?, feature_resolution = ?, feature_CPU = ?, feature_RAM = ?, feature_storage = ?, feature_battery = ?, feature_rear_camera = ?, feature_front_camera = ? WHERE feature_id = ?`,
    [
      feature.color,
      feature.weight,
      feature.dimensions,
      feature.OS,
      feature.screensize,
      feature.resolution,
      feature.CPU,
      feature.RAM,
      feature.storage,
      feature.battery,
      feature.rear_camera,
      feature.front_camera,
      feature.id,
    ]
  );
}

// DELETE
export function deleteById(featureId) {
  return db_conn.query(`DELETE FROM feature WHERE feature_id = ?`, [featureId]);
}
