import express from "express";
import { getEditProfile, getUserDetail, handleUsers, postEditProfile } from "../controllers/userController";
import { onlyPrivate, uploadFiles } from "../middlewares";


const userRouter = express.Router();

userRouter.get("/",handleUsers);

userRouter.get("/edit-profile", onlyPrivate, getEditProfile);
userRouter.post("/edit-profile", onlyPrivate, uploadFiles.single("photo"),postEditProfile);

userRouter.get("/:id", getUserDetail);


export default userRouter;