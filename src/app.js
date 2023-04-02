import express from "express";
import morgam from "morgan";
import { create } from "express-handlebars";
import { router } from "./routes/index.routes.js";
import { routerAuth } from "./routes/auth.routes.js";
import * as path from "path";
import { fileURLToPath } from "url";
import cookieParse from "cookie-parser";

const app = express();
app.use(cookieParse());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hbs = create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.resolve(__dirname, "views/layouts"),
  partialsDir: [path.resolve(__dirname, "views/partials")],
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(morgam("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(routerAuth);

export default app;
