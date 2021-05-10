import express from "express";
import { getEditProfile, getUserDetail, handleUsers, postEditProfile } from "../controllers/userController";


const userRouter = express.Router();

userRouter.get("/",handleUsers);

userRouter.get("/edit-profile", getEditProfile);
userRouter.post("/edit-profile", postEditProfile);

userRouter.get("/:id", getUserDetail);


export default userRouter;