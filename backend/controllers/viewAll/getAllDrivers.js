import userModel from "../../models/userModel.js";

const getAllDrivers = async (req, res, next) => {
  console.log("get all users...");
  try {
    const allDrivers = await userModel.find({ role: "driver" });
    res.status(200).json({
      status: "Success!",
      results: allDrivers.length,
      data: allDrivers,
    });
  } catch (err) {
    console.log("ERROR!!!");
  }
};

export default getAllDrivers;
