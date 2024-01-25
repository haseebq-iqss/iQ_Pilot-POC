import { useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import MapComponent from "../../components/Map";
import "./AdminDashStyles.scss";
import UserDataContext from "../../context/UserDataContext";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AllEmployeesContext from "../../context/AllEmployeesContext";

function AdminDashboard() {
  const { userData } = useContext(UserDataContext);
  const { allEmps, setAllEmps } = useContext(AllEmployeesContext);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDriver, setCurrentDriver] = useState();

  const getAllDriversQF = () => {
    return useAxios.get("users/getAllDrivers");
  };

  const { data: allDrivers, status: driverStatus } = useQuery({
    queryKey: ["all drivers"],
    queryFn: getAllDriversQF,
    select: (data) => {
      return data?.data?.data;
    },
  });

  const getAllRoutesQF = () => {
    return useAxios.get("routes");
  };

  const { data: allRoutes, status: routesStatus } = useQuery({
    queryKey: ["all routes"],
    queryFn: getAllRoutesQF,
    select: (data) => {
      return data?.data?.data;
    },
  });

  const getAllTMsQF = () => {
    return useAxios.get("users/employees");
  };

  const { data: allTMs, status: tMsStatus } = useQuery({
    queryKey: ["all TMs"],
    queryFn: getAllTMsQF,
    select: (data) => {
      return data?.data?.data;
    },
  });

  if (tMsStatus === "success") {
    setAllEmps(allTMs);
    console.log("context set")
  }

  useEffect(() => {
    if (allDrivers) {
      setCurrentDriver(allDrivers[0]);
    }
  }, [allDrivers]);

  function HandleAddPassengers(e: FormEvent) {
    e.preventDefault();
    (e.currentTarget as any)?.shiftTime.value;
    const routeData = {
      assignedToDriver: currentDriver,
      shiftTime: (e.currentTarget as any)?.shiftTime.value,
    };
    // console.log(routeData);
    navigate("/selectPassengers", { state: routeData });
  }

  return (
    <div className="admin-dash-container">
      <div className="dash-controls">
        <Btn onClick={() => navigate("/")}>
          {`Logout of ${userData?.name} - ${userData?.role}`}
        </Btn>
        <Btn onClick={() => setIsModalOpen(!isModalOpen)}>
          + Schedule a Route
        </Btn>
      </div>

      <div style={{ display: isModalOpen ? "flex" : "none" }} className="modal">
        <form onSubmit={HandleAddPassengers} className="modal-content">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            className="header"
          >
            <h1>Schedule a Route</h1>
            <h1 onClick={() => setIsModalOpen(!isModalOpen)}>x</h1>
          </div>

          <div className="driverSelect">
            <label style={{ marginRight: "25px" }} htmlFor="shiftTime">
              Select Driver
            </label>
            <select
              defaultValue={currentDriver}
              onChange={(e) => {
                setCurrentDriver(
                  allDrivers?.find((driver: any) => {
                    return driver._id === e.currentTarget.value;
                  })
                );
              }}
              required
            >
              {driverStatus !== "pending" &&
                allDrivers?.map((driver: any) => {
                  return (
                    <option key={driver._id} value={driver._id}>
                      {driver.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="shift">
            <label htmlFor="shiftTime">Shift Time</label>
            <input
              required
              style={{ padding: "10px 25px" }}
              type="text"
              name="shiftTime"
              id="shiftTime"
              placeholder="2PM"
            />
          </div>
          <Btn type="submit">+ Select Passengers</Btn>
        </form>
      </div>

      <div className="stat-div">
        <div className="stat">
          <h1>{allRoutes?.length}</h1>
          <h5>Routes Added</h5>
        </div>
        <div className="stat">
          <h1>{allDrivers?.length}</h1>
          <h5>Cabs Available</h5>
        </div>
        <div className="stat">
          <h1>{allTMs?.length}</h1>
          <h5>TMs Roastered</h5>
        </div>
        <div className="stat">
          <h1>321</h1>
          <h5>Total Kms</h5>
        </div>
      </div>
      <MapComponent markersArray={allTMs} />
    </div>
  );
}

export default AdminDashboard;
