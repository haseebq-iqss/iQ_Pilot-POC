import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./EmpDashStyles.scss"

function EmployeeDashboard() {
  const navigate = useNavigate()
  return (
    <div className="emp-dash-container">
      <div className="cab-detail-card">
        <h3>Pickup for 2 PM</h3>
        <div className="driver">
          <img src="/driver.jpg" alt="" width={"30px"} height={"30px"} />
          <h5>Bashir Ahmed</h5>
          <Btn>Call</Btn>
        </div>
          <div className="number-plate">
            <h1>JK01 AK 1151</h1>
          </div>
        <Btn>X Cancel Cab</Btn>
      </div>

      <div className="option-card">
        <Btn>Settings</Btn>
        <Btn onClick={() => navigate("/")}>
        Logout
      </Btn>
      </div>
      <MapComponent height="100vh" />
    </div>
  );
}

export default EmployeeDashboard;
