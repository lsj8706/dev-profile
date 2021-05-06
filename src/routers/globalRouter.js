import express from "express";
import { handleHome } from "../controllers/userController";


const globalRouter = express.Router();

globalRouter.get("/",handleHome);
globalRouter.get("/join",(req,res)=>res.render("join"));
globalRouter.get("/login",(req,res)=>res.render("login"));


export default globalRouter;