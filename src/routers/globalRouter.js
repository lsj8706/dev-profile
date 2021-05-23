import express from "express";
import passport from "passport";
import { getJoin, getLogin, githubLogin, handleHome, logout, postGithubLogin } from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middlewares";



const globalRouter = express.Router();

globalRouter.get("/",handleHome);
globalRouter.get("/join", onlyPublic, getJoin);
globalRouter.get("/login", onlyPublic, getLogin);
globalRouter.get("/logout", onlyPrivate, logout);

globalRouter.get("/auth/github", onlyPublic, githubLogin);
globalRouter.get(
    "/auth/github/callback",
    onlyPublic,
    passport.authenticate("github",{failureRedirect: "/login"}),
    postGithubLogin
);

export default globalRouter;