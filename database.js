import mysql from "mysql2/promise";
import "dotenv/config";

export const db_conn = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Local Host MySQL Server connection

// export const db_conn = mysql.createPool({
//   host: "localhost",
//   user: "tmh-app",
//   password: "abc123",
//   database: "the-mobile-hour",
// });

// async function testDatabaseConnection() {
//   try {
//     const connection = await db_conn.getConnection();

//     // If connection is successful, log a success message
//     if (connection) {
//       console.log("Connected to 'the-mobile-hour' database!");

//       connection.release();
//     }
//   } catch (error) {
//     // If connection fails, log an error message
//     console.log(error);
//   }
// }

// testDatabaseConnection();
