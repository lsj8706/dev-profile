import express from "express";
import { getJoin, getLogin, handleHome } from "../controllers/userController";



const globalRouter = express.Router();

globalRouter.get("/",handleHome);
globalRouter.get("/join", getJoin);
globalRouter.get("/login",getLogin);


export default globalRouter;