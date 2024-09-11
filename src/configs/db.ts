import mysql from "mysql2";
import transaction_mysql from "mysql2/promise"

// TODO: update this to use env variables - most probably just missing a app.use(dotenv()) in the root
export const conn = mysql.createConnection('mysql://root:root@localhost:3307/bucks_cafe');
export const promiseConn = transaction_mysql.createConnection('mysql://root:root@localhost:3307/bucks_cafe')
