import userModel from "../models/userModel.js"

const getAllUsers = async (req, res)=>{
    try {
        const users = await userModel.find()
        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(404).json({
            error : error.message
        }
        )
    }
   

}

const getUser = ()=>{

}

const addUser = async(req, res)=>{
    try {
        const user = await userModel.create(req.body)
        res.status(201).json(
            user
        )
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

const updateUser = () => {
    
}

const deleteUser = () => {

}

export  {getAllUsers, getUser, updateUser, addUser, deleteUser}