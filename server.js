import app from "./app.js";
import configs from "./configs.js";
import connection from "./db.js";

const connectToDB = async () => {
  try {
    await connection.getConnection();
  } catch (err) {
    console.log(`❌ Connection Error: ${err}`);
    connection.end();
  }
};

const startServer = () => {
  app.listen(configs.port, () => {
    console.log(`✅ Server started on port: ${configs.port}`);
  });
};

const runServer = async () => {
  await connectToDB();
  startServer();
};

await runServer();