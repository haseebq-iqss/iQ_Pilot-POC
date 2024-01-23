import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Btn from "./../../components/Button";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
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
        gap: "25px",
      }}
      className="login-container"
    >
      <form
        onSubmit={(e) => handleLogin(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1>SIGNUP</h1>
        <h4>Hey there, {user}</h4>

        <input
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Name"
        />
        <input
          style={{ padding: "10px 15px" }}
          type="number"
          placeholder="Phone"
        />
        <input
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Email"
        />
        <Btn>Set Pickup Location</Btn>
        <input
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Address"
        />
        {user === "driver" && (
          <>
          <input
            style={{ padding: "10px 15px" }}
            type="number"
            placeholder="Seating Capacity"
            />
          <input
            style={{ padding: "10px 15px" }}
            type="text"
            placeholder="numberPlate"
            />
            </>
        )}
        <input
          style={{ padding: "10px 15px" }}
          type="password"
          placeholder="Password"
        />
        <input
          style={{ padding: "10px 15px" }}
          type="password"
          placeholder="Confirm Password"
        />

        <Btn type="submit">Register</Btn>
      </form>
      <p>OR</p>
      <Btn onClick={() => navigate("/login", {state: user})}>Login</Btn>
    </div>
  );
}

export default Signup;
