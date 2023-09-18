import { newStaff, create } from "./models/staff.js";

const staff = newStaff(null, "Lisa", "H", "User", "leesah", "lisa123");

create(staff).then((result) => {
  console.log("Query finished running!");
  console.log(result);
});
