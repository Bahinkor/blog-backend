import mysql from "mysql2";

import configs from "./configs.js";

const connection = mysql.createConnection({
  host: configs.db.host,
  port: configs.db.port,
  user: configs.db.user,
  password: configs.db.password,
  database: configs.db.name
});

connection.connect(err => {
  if (err) throw err;

  console.log("✅ Connected to database successfully.");
});

export default connection;