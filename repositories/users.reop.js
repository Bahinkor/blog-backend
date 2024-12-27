import connection from "../db.js";

const create = async ({ name, username, email, password }) => {
  const insertQuery = "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)";

  const [user] = await connection.execute(insertQuery, [name, username, email, password]);

  return user[0];
};

const findByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = ?";

  const [user] = await connection.execute(query, [username]);

  return user[0];
};

const findByID = async (id) => {
  const query = "SELECT * FROM users WHERE id = ?";

  const [user] = await connection.execute(query, [id]);

  return user[0];
};

export { create, findByID, findByUsername };