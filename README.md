# The Mobile Hour Web Application

**The Mobile Hour** is a server-side web application designed to provide a seamless experience for customers to browse and purchase top-brand mobile phones, and for staff members to manage the platform's data via a dedicated staff portal. Below, you will find an overview of the project, its purpose and the technologies used.

## Project Overview and Purpose

The aim of **The Mobile Hour** is to offer a modern, secure and user-friendly platform for the online sale of top-brand mobile phones. The application ensures an appealing, highly functional and responsive interface that meets the needs of customers and staff members using the site.

## Architecture

The application follows the MVC (Model-View-Controller) architectural pattern, ensuring a clear separation of concerns:

**Model**: Manages the application's data and logic.
**View**: Represents the UI of the application, rendered dynamically using EJS templates.
**Controller**: Handles the user input, interacts with the model, and renders the appropriate view.

## Technologies Used

In this project, there are many technologies and libraries used.

### Backend

- [EJS](https://www.npmjs.com/package/ejs): EJS (Embedded JavaScript) is a simple templating language that enables dynamic HTML page generation.

- [express](https://www.npmjs.com/package/express): Express is a fast and minimalist web framework for Node.js, used for handling routing, middleware, and HTTP request/response management.

- [express-session](https://www.npmjs.com/package/express-session): Express-session is a middleware for handling session state in Express applications. 

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Bcryptjs is a library for securely hashing passwords.

- [mysql2](https://www.npmjs.com/package/mysql2): Mysql2 is a Node.js-based MySQL client library that facilitates interaction with MySQL databases.

- [validator](https://www.npmjs.com/package/validator): Validator is a Node.js-based module for string validation and sanitisation.

### Database

- [MySQL](https://www.mysql.com/): A robust relational database management system used for storing and managing application data.

## Getting Started

To get started with **The Mobile Hour Web Application**, follow the steps outlined below:

1. Clone the repository or download a ZIP file to your local machine.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your database (there is a sample DB in `mysql-dump/the-mobile-hour.sql`) and
   configure the connection in the `database.js` file located in the root directory.

4. Start the backend localhost server:

   ```bash
   npm run start
   ```







