import express from "express";
import { configDotenv } from "dotenv";
import connectToMongo from "./config/connectToDb.js";
import employeeRouter from "./routes/employeeRoutes.js";
import driverRouter from "./routes/driverRoutes.js";
import adminRouter from "./routes/admin.js";
import routeRouter from "./routes/routeRoutes.js";
import rideReviewRouter from "./routes/rideReviewRoutes.js";
import routeReviewRouter from "./routes/routeReviewRoutes.js";

configDotenv();

const app = express();

connectToMongo();


app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/driver", driverRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/route", routeRouter);
app.use("/api/v1/rideReview", rideReviewRouter);
app.use("/api/v1/routeReview", routeReviewRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
});
