import { useLocation, useNavigate } from "react-router-dom";
import MapComponent from "../../components/Map";
import Btn from "./../../components/Button";
import "./SelectedPassStyles.scss";
import AllEmployeesContext from "../../context/AllEmployeesContext";
import { FormEvent, useContext, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";

function SelectPassengers() {
  const location = useLocation();
  //   console.log(location.state);

  const shiftTime = location.state?.shiftTime;
  const driver = location.state?.assignedToDriver;

  const { allEmps, setAllEmps } = useContext(AllEmployeesContext);

  const [searchedEmps, setSearchedEmps] = useState<any>();
  const [selectedEmps, setSelectedEmps] = useState<any>([]);

  const navigate = useNavigate();

  const searchEmp = (str: string) => {
    if (str.length == 0) {
      setSearchedEmps([]);
      return;
    }
    console.log(searchedEmps);
    return allEmps.filter((emp: any) => {
      return emp.name.toLowerCase().includes(str);
    });
  };

  const CreateRouteMF = (createRouteData: any) => {
    return useAxios.post("routes", createRouteData);
  };

  const { status, mutate: createRoute } = useMutation({
    mutationFn: CreateRouteMF,
    onSuccess: (data) => {
    //   setUserData(data?.data?.data);
      navigate(`/admin`);
      alert("Route was added successfully!")
    console.log(data)
    },
  });

  function HandleCreateRoute() {
    const createRouteData:any = {
        assignedToDriver: driver?._id,
        shiftTime,
        passengers:selectedEmps
    }
    // console.log(createRouteData)
    createRoute(createRouteData)
  }

  return (
    <div className="select-pass-container">
      <div className="selectedList">
        <h2>Shift : {shiftTime} PM</h2>
        <h2>Capacity {driver?.seatingCapacity - selectedEmps?.length} out of {driver?.seatingCapacity}</h2>
        <div className="selectionEmps">
          <input
            type="text"
            onChange={(e) => setSearchedEmps(searchEmp(e.target.value))}
            placeholder="search employee"
          />
          {searchedEmps?.length &&
            searchedEmps.map((emp: any) => {
              return (
                <p
                  onClick={() =>
                    setSelectedEmps(driver?.seatingCapacity - selectedEmps?.length != 0 ? (prevEmps: any) => [...prevEmps, emp] : selectedEmps)
                  }
                  style={{ padding: "7.5px 15px", border: "2px solid black" }}
                  key={emp._id}
                >
                  + &nbsp; {emp.name} - {emp.address}
                </p>
              );
            })}
        </div>
        {selectedEmps?.length &&
          selectedEmps.map((emp:any) => {
            return (
              <h4 onClick={() => setSelectedEmps((prevEmps: any) => prevEmps.filter((currEmp:any) => currEmp._id != emp._id),)} key={emp._id}>
                ✔️ {emp.name} - {emp.address}
              </h4>
            );
          })}
        <Btn>Cancel</Btn>
        <Btn onClick={HandleCreateRoute}>Save and Confirm</Btn>
      </div>
      <div className="map">
        <MapComponent height="100vh" />
      </div>
    </div>
  );
}

export default SelectPassengers;
