import express from "express";
import path from "path";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";



const app = express();


app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/users", userRouter);





export default app;