import express from "express";
import { index } from "../controllers/index.controllers.js";
import { dashboard, saveImage } from "../controllers/index.controllers.js";
import { verifyToken } from "../middlewares/middlewares.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
/**
 * @route - ruta principal
 */
router.get("/", index);
router.get("/dashboard", verifyToken, dashboard);
router.post("/dashboard", upload.single("images"), saveImage);

export { router };
