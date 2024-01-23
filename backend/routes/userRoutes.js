import express from "express"
import {deleteUser, getAllUsers, getUser, login, signUp, updateUser} from "../controllers/userController.js"
const userRouter = express.Router()

userRouter.route("/").get(getAllUsers)
userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser)


userRouter.route("/login").post(login)
userRouter.route("/signup").post(signUp)
export default userRouter