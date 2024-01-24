import express from "express";
import {
  addRoute,
  deleteRoute,
  getAllRoutes,
  getRoute,
  updateRoute,
} from "../controllers/routeController.js";

const routeRouter = express.Router();

routeRouter.route("/").get(getAllRoutes).post(addRoute);

routeRouter.route("/:id").get(getRoute).put(updateRoute).delete(deleteRoute);

export default routeRouter;
