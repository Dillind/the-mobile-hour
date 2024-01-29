// import {
//   newStaff,
//   create,
//   getAll,
//   getById,
//   getByUsername,
//   update,
//   deleteById,
// } from "./models/staff.js";

// getByUsername("dylan")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// import {
//   newProduct,
//   create,
//   getAll,
//   getById,
//   getBySearch,
//   update,
//   deleteByID,
// } from "./models/products.js";

// import {
//   newOrder,
//   create,
//   getAll,
//   getById,
//   updateStatusById,
//   deleteById,
// } from "./models/orders.js";

// deleteById(10)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

import { newProductFeature, getAll } from "./models/products-features.js";

getAll()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// import {
//   newFeature,
//   create,
//   getAll,
//   getById,
//   update,
//   deleteByID,
// } from "./models/feature.js";

// const feature = newFeature(
//   null,
//   "500g",
//   "Blue",
//   "5.12 x 2.30 x 0.29 in",
//   "iOS 17",
//   "6.1 inch",
//   "2500 x 2000",
//   "4 core CPU with 1 performance and 3 efficiency cores",
//   "4GB",
//   "256GB",
//   "3100 mAH",
//   "30MP",
//   "20MP"
// );

// deleteByID(2)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getById(2).then((product) => {
//   product.name = "Samsung Galaxy 14";
//   product.manufacturer = "Samsung";
//   product.price = "4000";
//   product.stock = 20;
//   update(product)
//     .then((result) => console.log("Product updated!"))
//     .catch((error) => console.log("Failed to update..." + error));
// });

// getById(1).then((feature) => {
//   feature.color = "Silver";
//   feature.weight = "206g";
//   feature.dimensions = "5.81 x 2.81 x 0.31 in";
//   feature.OS = "iOS 16";
//   feature.resolution = "2556 x 1179 pixels";
//   feature.CPU = "6-core CPU with 2 performance and 4 efficiency cores";
//   feature.RAM = "6GB";
//   feature.storage = "128GB";
//   feature.battery = "3200 mAH";
//   feature.rear_camera = "48MP";
//   feature.front_camera = "12MP";
//   update(feature)
//     .then((result) => console.log("Feature updated!"))
//     .catch((error) => console.log("Failed to update..." + error));
// });

// create(feature)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getAll()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getById(2)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// import { newProductStaff, getAll } from "./models/products-staff.js";

// import {
//   newOrderProduct,
//   getAllByOrderId,
//   getAllByOrderStatus,
// } from "./models/orders-products.js";

// getAllByOrderStatus("packing order")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getAllByOrderId(1)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getAllByOrderId(1)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const productStaff = newProductStaff(
//   null,
//   "Apple iPhone 14 Pro",
//   "iPhone 14 Pro",
//   "Apple Inc",
//   "1550",
//   "10",
//   "The iPhone 14 Pro captures incredible detail with its 48MP Main camera, the addition of Dynamic Island allows users to interact with the iPhone differently and the all-day battery life gives you more access to your phone.",
//   1,
//   1,
//   null,
//   "Dylan",
//   "Lindsay",
//   "manager",
//   "dylan",
//   "abc123"
// );

// getAll()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const product = newProduct(
//   null,
//   "Apple iPhone 15 Pro",
//   "iPhone 15 Pro",
//   "Apple Inc",
//   "2020",
//   "30",
//   "The iPhone 15 Pro captures incredible detail with its 48MP Main camera, the addition of Dynamic Island allows users to interact with the iPhone differently and the all-day battery life gives you more access to your phone.",
//   1,
//   1
// );

// const order = newOrder(
//   null,
//   1,
//   "Lisa",
//   "Hinton",
//   "0456765402",
//   "lisahinton00@gmail.com",
//   "pending",
//   new Date().toISOString().slice(0, 19).replace("T", " ")
// );

// create(order).then((result) => {
//   console.log("Query finished running!");
//   console.log(result);
// });

// getAll()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getById(1)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// updateStatusById(13, "shipped")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

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

// deleteByID(2).then((result) => console.log("Product deleted!"));

// const staff = newStaff(null, "Lisa", "H", "User", "leesah", "lisa123");

// create(staff).then((result) => {
//   console.log("Query finished running!");
//   console.log(result);
// });

// getAll().then((result) => console.log(result));

// getById(3)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// getById(4).then((staff) => {
//   staff.access_role = "manager";
//   staff.username = "lizer";
//   update(staff)
//     .then((result) => console.log("Staff updated!"))
//     .catch((error) => console.log("Failed to update..." + error));
// });

// deleteById(2).then((result) => console.log("Staff member deleted!"));
