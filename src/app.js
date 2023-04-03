import express from "express";
import morgan from "morgan";
import cookieParse from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import multer from "multer";
import { create } from "express-handlebars";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { router } from "./routes/index.routes.js";
import { routerAuth } from "./routes/auth.routes.js";
import { routerImages } from "./routes/images.routes.js";

dotenv.config();
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

const hbs = create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: resolve(__dirname, "views/layouts"),
  partialsDir: [resolve(__dirname, "views/partials")],
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", resolve(__dirname, "./views"));

app.use(morgan("dev"));
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve(__dirname, "public")));
app.use(router);
app.use(routerAuth);
app.use(routerImages);

export default app;
