import express from "express";
import {
  getEditProfile,
  getUserDetail,
  handleUsers,
  postEditProfile,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/", handleUsers);

userRouter.get("/edit-profile", onlyPrivate, getEditProfile);
userRouter.post("/edit-profile", onlyPrivate, postEditProfile);

userRouter.get("/:id", getUserDetail);

export default userRouter;
