import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./EmpDashStyles.scss";
import UserDataContext from "../../context/UserDataContext";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../hooks/useAxios";
import AllEmployeesContext from "../../context/AllEmployeesContext";

function EmployeeDashboard() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  const { allEmps, setAllEmps } = useContext(AllEmployeesContext);

  const [passengers, setPassengers] = useState([]);

  const getPassengerRoutesQF = () => {
    return useAxios.get(`routes/getPassengersCab/${userData?._id}`);
  };

  const { data: myCab, status: routesStatus } = useQuery({
    queryKey: ["My Cab"],
    queryFn: getPassengerRoutesQF,
    select: (data) => {
      return data?.data?.cab;
    },
  });

  useEffect(() => {
    if (routesStatus === "success") {
      const newPassengers = myCab?.passengers.map((passens) => passens.pickUp);

      const uniquePickUps = new Set([...passengers, ...newPassengers]);

      const uniquePickUpsArray = Array.from(uniquePickUps);
  
      setPassengers(uniquePickUpsArray);
    }
  }, [myCab])

  
  // console.log(passengers)


  const getMyDriverQF = () => {
    return useAxios.get(`users/${myCab?.assignedToDriver}`);
  };

  const { data: myDriver } = useQuery({
    queryKey: ["My Driver"],
    queryFn: getMyDriverQF,
    enabled: routesStatus === "success",
    select: (data) => {
      return data?.data?.data;
    },
  });

  return (
    <div className="emp-dash-container">
      <div className="cab-detail-card">
        <h3>Pickup for {myCab?.shiftTime} PM</h3>
        <div className="driver">
          <img src="/driver.jpg" alt="" width={"30px"} height={"30px"} />
          <h5>{myDriver?.name}</h5>
          <Btn>Call</Btn>
        </div>
        <div className="number-plate">
          <h1>{myDriver?.numberPlate}</h1>
        </div>
        <Btn>X Cancel Cab</Btn>
      </div>

      <div className="option-card">
        <Btn>Settings</Btn>
        <Btn onClick={() => navigate("/")}>
          {`Logout of ${userData?.name} - ${userData?.role}`}
        </Btn>
        <Btn>+ Schedule a Route</Btn>
      </div>
      {/* @ts-ignore */}
      <MapComponent routingEnabled={true} markersArray={passengers} height="100vh" />
    </div>
  );
}

export default EmployeeDashboard;
