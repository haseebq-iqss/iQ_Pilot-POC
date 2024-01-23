import express from "express";
import {
    createRideReview,
    getAllRideReviews,
    getRideReviewById,
    updateRideReview,
    deleteRideReview,
} from "../controllers/rideReviewController.js";

const rideReviewRouter = express.Router();

rideReviewRouter.post("/", createRideReview);
rideReviewRouter.get("/", getAllRideReviews);
rideReviewRouter.get("/:id", getRideReviewById);
rideReviewRouter.put("/:id", updateRideReview);
rideReviewRouter.delete("/:id", deleteRideReview);

export default rideReviewRouter;