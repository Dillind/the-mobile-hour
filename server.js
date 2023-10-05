import express from "express";
import session from "express-session";

const app = express();
const port = 8080;

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
app.use(express.static("static"));

// Import and use controllers
import productController from "./controllers/products.js";
app.use(productController);
import orderController from "./controllers/orders.js";
app.use(orderController);
import staffController from "./controllers/staff.js";
app.use(staffController);

// Setup 404 and root page redirects

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

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});
