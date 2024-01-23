import mongoose from "mongoose";

const connectToMongo = async () => {

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("CONNECTED WITH DATABASE");
  } catch (error) {
    console.log("Something Went Wrong While Connecting The Database", error);
  }

};

export default connectToMongo;
