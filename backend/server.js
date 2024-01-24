import express from "express";
import { configDotenv } from "dotenv";
import connectToMongo from "./config/connectToDb.js";
import routeRouter from "./routes/routeRoutes.js";
import routeReviewRouter from "./routes/routeReviewRoutes.js";
import userRouter from "./routes/userRoutes.js";
import rideReviewRouter from "./routes/rideReviewRoutes.js";

configDotenv();

const app = express();
app.use(express.json())
connectToMongo();


app.use("/api/v1/users", userRouter)
app.use("/api/v1/routes", routeRouter);
app.use("/api/v1/rideReview", rideReviewRouter);
app.use("/api/v1/routeReview", routeReviewRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
});



// ADMIN ACTIONS 
//  login
//  createRoute
//  viewAllRoutes
//  viewAllDrivers
//  viewAllTeamMembers

// DRIVER ACTION
// login
// signup
// markEmployeeAttendence
// viewAssignedRoutes (with nested Team Member Objects)

// EMPLOYEE ACTIONS
// login
// signup
// cancelCab
// markOnLeave

