import routeModel from "../../models/routeModel.js";

const getallroutes = async (req, res, next) => {
    try {
      const allroutes = await routeModel.find();
      res.status(200).json({
        status: "success",
        data: allroutes,
      });
    } catch (err) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export default getallroutes;