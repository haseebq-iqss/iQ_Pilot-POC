import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./AdminDashStyles.scss";

function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="admin-dash-container">
      <Btn style={{ marginLeft: "auto", marginRight: "100px" }}>
        + Schedule a Route
      </Btn>
      <Btn onClick={() => navigate("/")} style={{ marginLeft: "100px" }}>
        - Logout
      </Btn>
      <div className="stat-div">
        <div className="stat">
          <h1>4</h1>
          <h5>Routes Added</h5>
        </div>
        <div className="stat">
          <h1>12</h1>
          <h5>Cabs Available</h5>
        </div>
        <div className="stat">
          <h1>142</h1>
          <h5>TMs Roastered</h5>
        </div>
        <div className="stat">
          <h1>321</h1>
          <h5>Total Kms</h5>
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default AdminDashboard;
