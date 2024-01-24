import mongoose, { Schema } from "mongoose";

const routeSchema = new Schema(
  {
    assignedToDriver: { type: String, required: true },

    passengers: [{ type: String, required: true }],

    shiftTime: { type: Date, required: true },
  },
  { timestamps: true }
);

const routeModel = mongoose.model("routeModel", routeSchema);
export default routeModel;
