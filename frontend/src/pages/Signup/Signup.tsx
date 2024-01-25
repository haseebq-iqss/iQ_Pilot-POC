import { FormEvent, InputHTMLAttributes, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Btn from "./../../components/Button";
import { useAxios } from "../../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import UserDataContext from "../../context/UserDataContext";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
  const [latLon, setLatLon] = useState<Array<number>>();

  const { userData, setUserData } = useContext(UserDataContext);
  
  const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        alert(
          `Location coordinates set : ${[
            pos.coords.latitude,
            pos.coords.longitude,
          ]}`
        );
        setLatLon([pos.coords.latitude, pos.coords.longitude]);
        // setPosition([pos.coords.latitude, pos.coords.longitude]);)
      },
      (err) => {
        alert(`Location Not Set! ${err}`);
      },
      { enableHighAccuracy: true, maximumAge: 1000 }
    );
  };

  const signupMF = (signupData: any) => {
    return useAxios.post("users/signup", signupData);
  };

  const { status, mutate: signup } = useMutation({
    mutationFn: signupMF,
    onSuccess: (data) => {
      setUserData(data?.data?.data);
      navigate(`/${data?.data?.data?.role}`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSignup = (e: FormEvent<any>) => {
    e.preventDefault();
    const signupData = {
      name: e.currentTarget?.name?.value,
      phone: e.currentTarget?.phone?.value,
      email: e.currentTarget?.email?.value,
      pickUp: latLon,
      role: user,
      drop: latLon,
      address: e.currentTarget?.address?.value,
      password: e.currentTarget?.password?.value,
    };

    signup(signupData);

    console.log(signupData);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
      className="login-container"
    >
      <h1>SIGNUP</h1>
      <h4>Hey there, {user}</h4>
      <form
        onSubmit={(e) => handleSignup(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          required
          name="name"
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Name"
        />
        <input
          required
          name="phone"
          style={{ padding: "10px 15px" }}
          type="number"
          placeholder="Phone"
        />
        <input
          required
          name="email"
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Email"
        />
        <Btn onClick={() => askForLocation()}>
          {user === "driver" ? "Set Starting Point" : "Set Pickup Location"}
        </Btn>
        <input
          required
          name="address"
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Address"
        />
        {user === "driver" && (
          <>
            <input
              required
              name="seatingCapacity"
              style={{ padding: "10px 15px" }}
              type="number"
              placeholder="Seating Capacity"
            />
            <input
              required
              name="numberPlate"
              style={{ padding: "10px 15px" }}
              type="text"
              placeholder="numberPlate"
            />
          </>
        )}
        <input
          required
          name="password"
          style={{ padding: "10px 15px" }}
          type="password"
          placeholder="Password"
        />
        <input
          required
          name="confirmPassword"
          style={{ padding: "10px 15px" }}
          type="password"
          placeholder="Confirm Password"
        />

        <Btn disabled={status === "pending"} type="submit">
          Register
        </Btn>
      </form>
      <>
        <p>OR</p>
        <Btn onClick={() => navigate("/login", { state: user })}>Login</Btn>
      </>
    </div>
  );
}

export default Signup;
