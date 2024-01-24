import userModel from "../../models/userModel.js"

export const getAllTeamMembers = async (req, res) => {
    try {
        const allEmployees = await userModel.find({ role: "employee" })
        res.status(200).json({
            status: "Success!",
            data: allEmployees
        })
    } catch (error) {
        res.status(400).json({
            error: error.message,
        })
    }
}