import express from 'express';

const app = express();
const port = 8080;

// Enable support for URL-encoded request bodies (form posts)
app.use(express.urlencoded({ extended: true }))

// Setup and use session middleware (!Importance: session middleware remembers the user when they navigate between pages)

// Setup and use the EJS view engine
app.set("view engine", "ejs");

// TODO: Setup 404 and root page redirects

// Setup and use static files middleware
app.use(express.static("static"));

// TODO: Import and use controllers

app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`)
})