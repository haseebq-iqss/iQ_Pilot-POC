import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import DriverDashboard from "../pages/DriverDashboard/DriverDashboard";
import EmployeeDashboard from "../pages/EmployeeDashboard/EmployeeDashboard";
import SelectPassengers from "../pages/SelectPassengers/SelectPassengers";
import ViewRoute from "../pages/ViewRoute/ViewRoute";

function MainNavigator() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/driver" element={<DriverDashboard />} />
      <Route path="/employee" element={<EmployeeDashboard />} />

      <Route path="/selectPassengers" element={<SelectPassengers />} />
      <Route path="/viewRoute" element={<ViewRoute />} />

    </Routes>
  );
}

export default MainNavigator;
