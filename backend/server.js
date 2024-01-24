import express from "express";
import { configDotenv } from "dotenv";
import connectToMongo from "./config/connectToDb.js";
import routeRouter from "./routes/routeRoutes.js";
import routeReviewRouter from "./routes/routeReviewRoutes.js";
import userRouter from "./routes/userRoutes.js";
import rideReviewRouter from "./routes/rideReviewRoutes.js";
import cors from "cors"

configDotenv();

const app = express();
app.use(express.json())
connectToMongo();
app.use(cors())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/routes", routeRouter);
app.use("/api/v1/rideReview", rideReviewRouter);
app.use("/api/v1/routeReview", routeReviewRouter);
app.use("/api/v1/getAllRoutes", routeReviewRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
});



// ADMIN ACTIONS 
//  login (done - Umair )   EOD Thursday
//  createRoute ( Umair ) EOD Thursday
//  viewAllRoutes ( Azeem ) EOD Thursday
//  viewAllDrivers ( Saaib )  EOD Thursday
//  viewAllTeamMembers ( Arshiya )  EOD Thursday

// DRIVER ACTION
// login <same as login in Admin>(done - Umair) EOD Thursday
// signup <same> (done - Umair) EOD Thursday
// markEmployeeAttendence ( Umair ) EOD Thursday
// viewAssignedRoutes (with nested Team Member Objects) (Umair) EOD Thursday

// EMPLOYEE ACTIONS
// login <same>(done - Umair) EOD Thursday
// signup <same> (done - Umair) EOD Thursday
// cancelCab ( Umair )  EOD Thursday
// markOnLeave ( Umair )  EOD Thursday

