import mysql from "mysql2/promise";

export const db_conn = mysql.createPool({
  host: "localhost",
  user: "tmh-app",
  password: "abc123",
  database: "the-mobile-hour",
});