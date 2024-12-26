import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import connection from "../db.js";

const migrate = async () => {
  // __dirname isn't available in ES Modules, so we use path.dirname combined with fileURLToPath to get the directory name of the current file.
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const newConnection = await connection.getConnection();

  const createUserTableSql = fs.readFileSync(path.resolve(__dirname, "./users-ddl.sql"), "utf8");
  const createArticlesTableSql = fs.readFileSync(path.resolve(__dirname, "./articles-ddl.sql"), "utf8");
  const createTagsTableSql = fs.readFileSync(path.resolve(__dirname, "./tags-ddl.sql"), "utf8");
  const createArticleTagsTableSql = fs.readFileSync(path.resolve(__dirname, "./articles-tags-ddl.sql"), "utf8");

  await newConnection.beginTransaction();

  try {
    await newConnection.query(createUserTableSql);
    await newConnection.query(createArticlesTableSql);
    await newConnection.query(createTagsTableSql);
    await newConnection.query(createArticleTagsTableSql);

    await newConnection.commit();
  } catch (err) {
    await newConnection.follback();
    throw err;
  }
};

migrate().then(() => {
  console.log("migration complete ✅");
}).catch(err => {
  console.error(`❌ migration failed with error: ${err}`);
  connection.end();
});