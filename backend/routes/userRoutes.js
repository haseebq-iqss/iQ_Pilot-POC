import express from "express"
import {addUser, getAllUsers} from "../controllers/userController.js"
const userRouter = express.Router()

userRouter.route("/").get(getAllUsers).post(addUser)

export default userRouter