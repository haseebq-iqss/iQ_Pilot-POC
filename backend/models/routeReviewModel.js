import mongoose , {Schema} from "mongoose";
const routeReviewSchema = new Schema({
    ofRoute: { type: String, required: true },
    byDriver: { type: String, required: true },
    review: { type: String, required: true },
},
{ timestamps: true }
);

const RouteReview = mongoose.model("RouteReview", routeReviewSchema);
export default RouteReview;