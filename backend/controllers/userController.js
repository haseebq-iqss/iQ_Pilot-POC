import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      status: 200,
      message: "Success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

const signUp = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({
      status: 201,
      message: "User created",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    l;
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
    req.user = user;
    res.status(200).json({
      status: 200,
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
  next();
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!newUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "User updated",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    res.status(204).json({
      status: 204,
      message: "User deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

export { getAllUsers, getUser, updateUser, signUp, deleteUser, login };
