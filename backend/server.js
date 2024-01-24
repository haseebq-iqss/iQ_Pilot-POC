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


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
});



// ADMIN ACTIONS 
//  login (done - Umair )   EOD Thursday DONE
//  createRoute ( Umair ) EOD Thursday DONE
//  viewAllRoutes ( Azeem ) EOD Thursday DONE
//  viewAllDrivers ( Saaib )  EOD Thursday DONE
//  viewAllTeamMembers ( Arshiya )  EOD Thursday DONE

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

