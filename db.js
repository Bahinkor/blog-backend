import mysql from "mysql2/promise";

import configs from "./configs.js";

const connection = mysql.createPool({
  uri: configs.db.uri,
  connectionLimit: configs.db.poolSize,
  waitForConnections: true
});

export default connection;