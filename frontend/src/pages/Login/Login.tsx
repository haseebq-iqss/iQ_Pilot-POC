import { useLocation, useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import { FormEvent } from "react";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const handleLogin = (e: FormEvent<any>) => {
    e.preventDefault();
    const loginData = {
      email: e.currentTarget?.email?.value,
      password: e.currentTarget?.password?.value,
    };

    console.log(loginData);
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
      <h1>LOGIN</h1>
      <h4>Welcome, {user}</h4>
      <form
        onSubmit={(e) => handleLogin(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <input
          required
          name="email"
          style={{ padding: "10px 15px" }}
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="password"
          style={{ padding: "10px 15px" }}
          type="password"
          placeholder="Password"
        />
        {/* <Btn type="submit">Login</Btn> */}
        <Btn
          onClick={() =>
            navigate(
              user === "driver"
                ? "/driver"
                : user === "admin"
                ? "/admin"
                : "/employee"
            )
          }
        >
          Login
        </Btn>
      </form>
      {user !== "admin" && (
        <>
          <p>OR</p>
          <Btn onClick={() => navigate("/signup", { state: user })}>Signup</Btn>
        </>
      )}
    </div>
  );
}

export default Login;
