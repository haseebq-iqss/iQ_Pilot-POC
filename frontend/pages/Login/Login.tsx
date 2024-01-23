import { useLocation, useNavigate } from "react-router-dom";
import Btn from "../../components/Button";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <h1>LOGIN</h1>
        <h4>Welcome, {user}</h4>

        <input
          style={{ padding: "10px 15px" }}
          type="text"
          placeholder="Email"
        />
        <input
          style={{ padding: "10px 15px" }}
          type="password"
          placeholder="Password"
        />
        <Btn type="submit">Login</Btn>
      </form>
      <p>OR</p>
      <Btn onClick={() => navigate("/signup", {state: user})}>Signup</Btn>
    </div>
  );
}

export default Login;
