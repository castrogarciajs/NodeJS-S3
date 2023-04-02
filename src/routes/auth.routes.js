import express from "express";
import {
  login,
  loginUsers,
  register,
  registerUser,
  singOut,
} from "../controllers/auth.controller.js";

const routerAuth = express.Router();

routerAuth.get("/register", register);
routerAuth.get("/login", login);
routerAuth.get("/logout", singOut);
routerAuth.post("/register", registerUser);
routerAuth.post("/login", loginUsers);

export { routerAuth };
