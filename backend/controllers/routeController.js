import routeModel from "../models/routeModel.js";

const getAllRoutes = async (req, res) => {
  try {
    const routes = await routeModel.find();
    res.status(200).json({
      message: "Success",
      count : routes.length,
      data: routes,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getRoute = async (req, res) => {
  try {
    const id = req.params.id;
    const route = await routeModel.findById(id);

    if (!route) {
      return res.status(404).json({
        message: "Route not found",
      });
    }

    res.status(200).json({
      message: "Route found",
      data: route,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const addRoute = async (req, res) => {
  try {
    const route = await routeModel.create(req.body);
    res.status(201).json({
      message: "Route created",
      data: route,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updateRoute = async (req, res) => {
  try {
    const id = req.params.id;
    const newRoute = await routeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!newRoute) {
      return res.status(404).json({
        message: "Route not found",
      });
    }

    res.status(200).json({
      message: "Route updated",
      data: newRoute,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const deleteRoute = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedRoute = await userModel.findByIdAndDelete(id);

    if (!deletedRoute) {
      return res.status(404).json({
        message: "Route not found",
      });
    }

    res.status(204).json({
      message: "Route deleted",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export { getAllRoutes, getRoute, addRoute, updateRoute, deleteRoute };