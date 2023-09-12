import express from 'express';

const app = express();
const port = 8080;

// TODO: Setup and use session middleware
// Important because session middleware remembers the user when they navigate between pages.

// TODO: Setup and use the EJS view engine

// TODO: Setup 404 and root page redirects

// TODO: Setup and use static files middleware

// TODO: Import and use controllers

app.listen(port, () => {
    console.log(`Express server started on http://localhost${port}`)
})