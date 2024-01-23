import mongoose, { Schema } from "mongoose";

const rideReviewSchema = new Schema(
    {
        ofDriver: { type: String, required: true },
        byEmployee: { type: String, required: true },
        review: { type: String, required: true },
    },
    { timestamps: true }
);

const RideReview = mongoose.model("RideReview", rideReviewSchema);

export default RideReview;
