import express from "express";
import { handleUsers } from "../controllers/userController";


const userRouter = express.Router();

userRouter.get("/",handleUsers);
userRouter.get("/edit-profile",(req,res)=>res.render("editProfile"));
userRouter.get("/:id",(req,res)=>res.render("userDetail"));


export default userRouter;