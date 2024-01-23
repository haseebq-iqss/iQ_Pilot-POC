import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard/DriverDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";

function App() {
  return (
    <div
      style={{ width: "100%", minHeight: "100vh" }}
      className="main-container"
    >
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
