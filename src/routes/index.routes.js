import express from "express";
import { index } from "../controllers/index.controllers.js";
import { dashboard } from "../controllers/image.controller.js";
import { verifyToken } from "../middlewares/middlewares.js";
const router = express.Router();

/**
 * @route - ruta principal
 */
router.get("/", index);
router.get("/dashboard", verifyToken, dashboard);

export { router };
