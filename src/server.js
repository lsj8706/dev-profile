import express from "express";
import path from "path";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
import "./passport";


const app = express();


app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl: process.env.DB_URL})
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", globalRouter);
app.use("/users", userRouter);





export default app;