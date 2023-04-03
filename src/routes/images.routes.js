import express from "express";
import { getImages } from "../controllers/image.controller.js";

const routerImages = express.Router();

/**
 * @route - ruta principal
 */
routerImages.get("/image", getImages);

export { routerImages };
