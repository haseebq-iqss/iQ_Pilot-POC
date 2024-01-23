import express from "express"
import {addUser, deleteUser, getAllUsers, getUser, updateUser} from "../controllers/userController.js"
const userRouter = express.Router()

userRouter.route("/").get(getAllUsers).post(addUser)
userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser)

export default userRouter