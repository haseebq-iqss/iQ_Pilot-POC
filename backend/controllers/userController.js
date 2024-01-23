import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    res.status(200).json({
      message: "User Found",
      user,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({
      message: "User Created",
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {

    const id = req.params.id;

    const newUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
        message : "User Updated",
        newUser
    })
  } catch (error) {
    res.status(500).json({
        error : error.message
    })
  }
};

const deleteUser = async (req, res) => {

    try {
        const id = req.params.id
        await userModel.findByIdAndDelete(id)  
        res.status(200).json({
            message : "User Deleted"
        })
    } catch (error) {
        res.status(400).json({
            error : error.message
        })
    }
};

export { getAllUsers, getUser, updateUser, addUser, deleteUser };
