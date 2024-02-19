import express from "express";
import session from "express-session";

const app = express();

// Enable support for URL-encoded request bodies (form posts)
app.use(express.urlencoded({ extended: true }));

// Setup and use session middleware (!Importance: session middleware remembers the user when they navigate between pages)

app.use(
  session({
    secret: "secret phrase",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Setup and use the EJS view engine
app.set("view engine", "ejs");

// Setup and use static files middleware
// app.use(express.static("static"));

app.use(express.static("static", { extensions: ["html"] }));

// Import and use controllers
import productController from "./controllers/products.js";
app.use(productController);
import orderController from "./controllers/orders.js";
app.use(orderController);
import staffController from "./controllers/staff.js";
app.use(staffController);
import featureController from "./controllers/features.js";
app.use(featureController);
import changelogController from "./controllers/changelog.js";
app.use(changelogController);

// Home page, about and contact page rendering

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Start listening for requests
app.listen(process.env.PORT, () => {
  console.log(`Express server started on http://localhost:${process.env.PORT}`);
});
