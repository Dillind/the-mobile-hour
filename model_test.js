// import {
//   newStaff,
//   create,
//   getAll,
//   getById,
//   update,
//   deleteById,
// } from "./models/staff.js";

import {
  newProduct,
  create,
  getAll,
  getById,
  getBySearch,
  update,
  deleteByID,
} from "./models/products.js";

// const staff = newStaff(null, "Lisa", "H", "User", "leesah", "lisa123");

const product = newProduct(
  null,
  "Apple iPhone 14 Pro",
  "iPhone 14 Pro",
  "Apple Inc",
  "1550",
  "10",
  "The iPhone 14 Pro captures incredible detail with its 48MP Main camera, the addition of Dynamic Island allows users to interact with the iPhone differently and the all-day battery life gives you more access to your phone.",
  1,
  1
);

// create(product).then((result) => {
//   console.log("Query finished running!");
//   console.log(result);
// });

// getAll().then((result) => console.log(result));

// getById(2).then((product) => {
//   product.name = "Samsung Galaxy 14";
//   product.manufacturer = "Samsung";
//   product.price = "4000";
//   product.stock = 20;
//   update(product)
//     .then((result) => console.log("Product updated!"))
//     .catch((error) => console.log("Failed to update..." + error));
// });

// getBySearch("Samsung")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

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
