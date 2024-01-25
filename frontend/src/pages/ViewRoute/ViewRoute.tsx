import { useLocation, useNavigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataContext";
import { useContext } from "react";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import AllEmployeesContext from "../../context/AllEmployeesContext";

function ViewRoute() {
  const location = useLocation();
  const shift = location.state;

  const { userData } = useContext(UserDataContext);
  const { allEmps, setAllEmps } = useContext(AllEmployeesContext);

  const navigate = useNavigate();

  if (shift) {
    setAllEmps(shift?.passengers)
  }

  return (
    <div className="admin-dash-container">
    <div className="dash-controls">
      <h1>Shift : {shift?.shiftTime} PM</h1>
      <Btn>
        Start Route
      </Btn>
    </div>

    <div className="stat-div">
      <div className="stat">
        {/* <h1>{allRoutes?.length}</h1> */}
        <h1>0</h1>
        <h5>Total Distance</h5>
      </div>
      <div className="stat">
        <h1>{shift?.passengers?.length}</h1>
        {/* <h1>{allDrivers?.length}</h1> */}
        <h5>Total Pickups</h5>
      </div>
      <div className="stat">
        <h1>0</h1>
        {/* <h1>{allTMs?.length}</h1> */}
        <h5>Estimated Time</h5>
      </div>
      <div className="stat">
        <h1>Rs. 321</h1>
        <h5>Cost</h5>
      </div>
    </div>
    <MapComponent driversLocation={true} routingEnabled={true} />
  </div>
  )
}

export default ViewRoute;
