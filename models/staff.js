// creates a connection with the mobile hour mysql database
import { db_conn } from "../database.js";

// returns an object that gives the information of staff all bundled back together
export function newStaff(
  id,
  first_name,
  last_name,
  access_role,
  username,
  password
) {
  return {
    id,
    first_name,
    last_name,
    access_role,
    username,
    password,
  };
}

// CREATE
export function create(staff) {
  return db_conn.query(
    // ?, ?, ?, ?, ? - parameter bindings (placeholders that help prevent sql injection)
    `INSERT INTO staff (staff_first_name, staff_last_name, staff_access_role, staff_username, staff_password)
    VALUES(?, ?, ?, ?, ?)`,
    [
      staff.first_name,
      staff.last_name,
      staff.access_role,
      staff.username,
      staff.password,
    ]
  );
}

// READ

export function getAll() {
  return (
    db_conn
      .query(`SELECT * FROM staff`)
      // ((([queryResult]))) - picking the format (array destructuring syntax that gets the first format)
      .then(([queryResult]) => {
        return queryResult.map((result) =>
          newStaff(
            result.staff_id,
            result.staff_first_name,
            result.staff_last_name,
            result.staff_access_role,
            result.staff_username,
            result.staff_password
          )
        );
      })
  );
}

export function getById(staffId) {
  return db_conn
    .query(`SELECT * FROM staff WHERE staff_id = ?`, [staffId])
    .then(([queryResult]) => {
      // check that at least one match was found
      if (queryResult.length > 0) {
        const result = queryResult[0];

        // Convert the result into a staff member object
        return newStaff(
          result.staff_id,
          result.staff_first_name,
          result.staff_last_name,
          result.staff_access_role,
          result.staff_username,
          result.staff_password
        );
      } else {
        return Promise.reject("No matching results");
      }
    });
}

// Get by username
export function getByUsername(username) {
  return db_conn
    .query(`SELECT * FROM staff WHERE staff_username = ?`, [username])
    .then(([queryResult]) => {
      if (queryResult.length > 0) {
        const result = queryResult[0];
        return newStaff(
          result.staff_id,
          result.staff_first_name,
          result.staff_last_name,
          result.staff_access_role,
          result.staff_username,
          result.staff_password
        );
      } else {
        return Promise.reject("No matching username found");
      }
    });
}

// Get by Access Role
export function getByRole(role) {
  return db_conn
    .query(`SELECT * FROM staff WHERE staff_access_role = ?`, [role])
    .then(([queryResult]) => {
      if (queryResult.length > 0) {
        return queryResult.map((result) =>
          newStaff(
            result.staff_id,
            result.staff_first_name,
            result.staff_last_name,
            result.staff_access_role,
            result.staff_username,
            result.staff_password
          )
        );
      } else {
        return Promise.reject("No matching role found");
      }
    });
}

// UPDATE

export function update(staff) {
  return db_conn.query(
    `
    UPDATE staff SET
    staff_first_name = ?,
    staff_last_name = ?,
    staff_access_role = ?,
    staff_username = ?,
    staff_password = ?
    WHERE staff_id = ?
    `,
    [
      staff.first_name,
      staff.last_name,
      staff.access_role,
      staff.username,
      staff.password,
      staff.id,
    ]
  );
}

// DELETE

export function deleteById(staffId) {
  return db_conn.query(`DELETE FROM staff WHERE staff_id = ?`, [staffId]);
}
