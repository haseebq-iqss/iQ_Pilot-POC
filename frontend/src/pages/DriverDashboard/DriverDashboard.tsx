import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./DDStyles.scss";
import { useContext, useState } from "react";
import UserDataContext from "../../context/UserDataContext";
import { useAxios } from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AllEmployeesContext from "../../context/AllEmployeesContext";

function DriverDashboard() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  // const { allEmps, setAllEmps } = useContext(AllEmployeesContext);

  const [myLocation, setMyLocation] = useState<Array<number>>([
    34.0079909, 74.80378,
  ]);

  const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        alert(
          `Location coordinates set : ${[
            pos.coords.latitude,
            pos.coords.longitude,
          ]}`
        );
        setMyLocation([pos.coords.latitude, pos.coords.longitude]);
        // setPosition([pos.coords.latitude, pos.coords.longitude]);)
      },
      (err) => {
        alert(`Location Not Set! ${err}`);
      },
      { enableHighAccuracy: true, maximumAge: 1000 }
    );
  };

  const getAllRoutesQF = () => {
    return useAxios.get(`routes/getAllDriverRoutes/${userData?._id}`);
  };

  const { data: allRoutes, status: routesStatus } = useQuery({
    queryKey: ["all assigned routes"],
    queryFn: getAllRoutesQF,
    select: (data) => {
      return data?.data?.data;
    },
  });

  if (routesStatus === "success") {
    // setAllEmps(allRoutes?.passengers)
    console.log(allRoutes);
  }

  return (
    <div className="admin-dash-container">
      <div className="dash-controls">
        <Btn onClick={() => navigate("/")}>
          {`Logout of ${userData?.name} - ${userData?.role}`}
        </Btn>
        {/* <Btn>+ Schedule a Route</Btn> */}
      </div>
      <div className="shifts-div">
        {/* <h3>Your Shifts</h3> */}
        {routesStatus === "success" &&
          allRoutes.map((route: any) => {
            return (
              <div key={route._id} className="shift">
                <h2>{route.shiftTime} - 28/01/2024</h2>
                <Btn onClick={() => navigate("/viewRoute", { state: route })}>
                  View Route Details
                </Btn>
              </div>
            );
          })}
      </div>
      <MapComponent driversLocation={true} height="50vh" />
    </div>
  );
}

export default DriverDashboard;
