import mongoose, { Schema } from "mongoose";

// Define the employee schema
const userSchema = new Schema(
  {
    // Basic information
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },

    // Additional details
    profilePicture: {
      type: String,
      default: "https://i.stack.imgur.com/l60Hf.png",
    },
    role: {
      type: String,
      enum: ['admin', 'employee', 'driver'],
      required: true,
    },

    // Optional details
    pickUp: { type: String },
    drop: { type: String },
    onLeave: { type: Boolean, default: false },
    seatingCapacity: { type: Number },
    numberPlate: { type: String },
  },
  // Options for the schema
  { timestamps: true }
);

const userModel = mongoose.model("userModel",userSchema)
// Export the employee schema
export default userModel;
