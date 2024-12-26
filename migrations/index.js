import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import connection from "../db.js";

const migrate = () => {
  // __dirname isn't available in ES Modules, so we use path.dirname combined with fileURLToPath to get the directory name of the current file.
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const createUserTableSql = fs.readFileSync(path.resolve(__dirname, "./users-ddl.sql"), "utf8");
  const createArticlesTableSql = fs.readFileSync(path.resolve(__dirname, "./articles-ddl.sql"), "utf8");
  const createTagsTableSql = fs.readFileSync(path.resolve(__dirname, "./tags-ddl.sql"), "utf8");
  const createArticleTagsTableSql = fs.readFileSync(path.resolve(__dirname, "./articles-tags-ddl.sql"), "utf8");

  // eslint-disable-next-line no-useless-catch
  try {
    connection.query(createUserTableSql);
    connection.query(createArticlesTableSql);
    connection.query(createTagsTableSql);
    connection.query(createArticleTagsTableSql);
  } catch (err) {
    throw err;
  }
};

migrate();