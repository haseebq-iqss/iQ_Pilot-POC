import mongoose, { Schema } from "mongoose";

const routeSchema = new Schema(
  {
    assignedToDriver: { type: String, required: true },

    passengers: [{ type: Object, required: true }],

    shiftTime: { type: String, required: true },

    routeStatus: {
      type: String,
      enum: ['notStarted', 'inProgress', 'completed'],
      default : "notStarted"
    } ,

    pickedPassengers: [{ type: String, default: 0}],
    
    totalDistance : {type: Number, default : 0}
  },
  { timestamps: true }
);

const routeModel = mongoose.model("routeModel", routeSchema);
export default routeModel;
