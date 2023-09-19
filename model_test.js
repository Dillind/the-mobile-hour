import {
  newStaff,
  create,
  getAll,
  getById,
  update,
  deleteById,
} from "./models/staff.js";

const staff = newStaff(null, "Lisa", "H", "User", "leesah", "lisa123");

// create(staff).then((result) => {
//   console.log("Query finished running!");
//   console.log(result);
// });

// getAll().then((result) => console.log(result));

// getById(3)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getById(2).then((staff) => {
//   staff.access_role = "manager";
//   staff.username = "lizer";
//   update(staff)
//     .then((result) => console.log("Staff updated!"))
//     .catch((error) => console.log("Failed to update..." + error));
// });

// deleteById(2).then((result) => console.log("Staff member deleted!"));
