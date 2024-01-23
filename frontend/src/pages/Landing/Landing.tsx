import { useNavigate } from "react-router-dom";
import Btn from "./../../components/Button";

function Landing() {
    const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
      className="landing-container"
    >
      <Btn onClick={() => navigate("/login", {state: "admin"})}>Admin Login</Btn>
      <h1>RPA</h1>
      <div className="bottom-btns">
        <Btn onClick={() => navigate("/login", {state: "employee"})} style={{ marginRight: "50px" }}>Employee Interface</Btn>
        <Btn onClick={() => navigate("/login", {state: "driver"})}>Driver Interface</Btn>
      </div>
    </div>
  );
}

export default Landing;
