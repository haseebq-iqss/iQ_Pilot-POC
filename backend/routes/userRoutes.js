import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  login,
  signUp,
  updateUser,
} from "../controllers/userController.js";
import restrictTo from "../middleware/restrictTo.js";
import getAllDrivers from "../controllers/viewAll/getAllDrivers.js";
const userRouter = express.Router();

userRouter.get("/getAllDrivers", getAllDrivers);
userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signUp);

export default userRouter;
