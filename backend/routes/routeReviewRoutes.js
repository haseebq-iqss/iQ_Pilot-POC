import express from "express"

import {
    createRouteReview,
    getAllRouteReviews,
    getRouteReviewById,
    updateRouteReview,
    deleteRouteReview,
} from "../controllers/routeReviewController.js";

const routeReviewRouter = express.Router()


routeReviewRouter.post("/", createRouteReview);
routeReviewRouter.get("/", getAllRouteReviews);
routeReviewRouter.get("/:id", getRouteReviewById);
routeReviewRouter.put("/:id", updateRouteReview);
routeReviewRouter.delete("/:id", deleteRouteReview);


export default routeReviewRouter