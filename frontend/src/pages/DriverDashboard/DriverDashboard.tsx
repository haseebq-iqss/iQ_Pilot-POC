import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./DDStyles.scss"

function DriverDashboard() {
    const navigate = useNavigate()
  return (
    <div className="admin-dash-container">
      <Btn style={{ marginLeft: "auto", marginRight: "100px" }}>
        + Schedule a Route
      </Btn>
      <Btn onClick={() => navigate("/")} style={{ marginLeft: "100px" }}> - Logout</Btn>
      <div className="shifts-div">
        <div className="shift">
            <h2>2 PM - 28/01/2024</h2>
            <Btn>View Route Details</Btn>
        </div>
        <div className="shift">
            <h2>2 PM - 28/01/2024</h2>
            <Btn>View Route Details</Btn>
        </div>
        <div className="shift">
            <h2>2 PM - 28/01/2024</h2>
            <Btn>View Route Details</Btn>
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default DriverDashboard;
