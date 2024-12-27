import express from "express";

import controller from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.route("/register").post(controller.register);
authRouter.route("/login").post(controller.login);
authRouter.route("/refresh").post(controller.refresh);
authRouter.route("/me").get(controller.GetMe);
authRouter.route("/logout").delete(controller.logout);

export default authRouter;