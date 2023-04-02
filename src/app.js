import express from "express";
import morgan from "morgan";
import cookieParse from "cookie-parser";
import { create } from "express-handlebars";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { router } from "./routes/index.routes.js";
import { routerAuth } from "./routes/auth.routes.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

const hbs = create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: resolve(__dirname, "views/layouts"),
  partialsDir: [resolve(__dirname, "views/partials")],
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", resolve(__dirname, "./views"));

app.use(morgan("dev"));
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(routerAuth);

export default app;
