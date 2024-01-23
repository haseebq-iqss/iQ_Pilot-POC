import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./DDStyles.scss"

function DriverDashboard() {
    const navigate = useNavigate()
  return (
    <div className="admin-dash-container">
      <div className="dash-controls">
      <Btn onClick={() => navigate("/")}>
        Logout
      </Btn>
      </div>
      <div className="shifts-div">
        {/* <h3>Your Shifts</h3> */}
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
      <MapComponent height="50vh" />
    </div>
  );
}

export default DriverDashboard;
