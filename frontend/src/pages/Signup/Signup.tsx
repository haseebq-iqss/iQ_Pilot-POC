import { FormEvent, InputHTMLAttributes, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Btn from "./../../components/Button";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
  const [latLon, setLatLon] = useState<Array<number>>();

  const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        alert([pos.coords.latitude, pos.coords.longitude]);
        setLatLon([pos.coords.latitude, pos.coords.longitude]);
        // setPosition([pos.coords.latitude, pos.coords.longitude]);)
      },
      (err) => {
        alert(err);
      },
      { enableHighAccuracy: true, maximumAge: 1000 }
    );
  };

  const handleSignup = (e: FormEvent<any>) => {
    e.preventDefault();
    const signupData = {
      name: e.currentTarget?.name?.value,
      phone: e.currentTarget?.phone?.value,
      email: e.currentTarget?.email?.value,
      pickup: latLon,
      drop: latLon,
      address: e.currentTarget?.address?.value,
      password: e.currentTarget?.password?.value,
    };

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
        <Btn onClick={() => askForLocation()}>Set Pickup Location</Btn>
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

        <Btn type="submit">Register</Btn>
      </form>
      <p>OR</p>
      <Btn onClick={() => navigate("/login", { state: user })}>Login</Btn>
    </div>
  );
}

export default Signup;
