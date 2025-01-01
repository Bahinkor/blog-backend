import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

import articlesRoutes from "./routes/articles.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// __dirname isn't available in ES Modules, so we use path.dirname combined with fileURLToPath to get the directory name of the current file.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.use("/api/auth", authRoutes);
app.use("/api/articles", articlesRoutes);

export default app;
