import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/get-all-users", getAllUsers);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user/:userId", updateUser);
userRouter.delete("/delete-user/:userId", deleteUser);
userRouter.get("/get-single-user/:userId", getSingleUser);
export default userRouter;
