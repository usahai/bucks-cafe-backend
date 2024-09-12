import mysql from "mysql2";
import transaction_mysql from "mysql2/promise"

// TODO: update this to use env variables - most probably just missing a app.use(dotenv()) in the root
export const conn = mysql.createConnection({
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || "3306")
});

export const promiseConn = transaction_mysql.createConnection({
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || "3306")
})
