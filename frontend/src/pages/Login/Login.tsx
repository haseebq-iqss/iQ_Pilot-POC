import { useLocation, useNavigate } from "react-router-dom";
import Btn from "../../components/Button";
import { FormEvent, useContext } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios } from "../../hooks/useAxios";
import UserDataContext from "../../context/UserDataContext";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const { userData, setUserData } = useContext(UserDataContext);

  const loginMF = (loginData: any) => {
    return useAxios.post("users/login", loginData);
  };

  const { status, mutate: login } = useMutation({
    mutationFn: loginMF,
    onSuccess: (data) => {
      setUserData(data?.data?.data);
      navigate(`/${data?.data?.data?.role}`);
    },
  });

  const handleLogin = (e: FormEvent<any>) => {
    e.preventDefault();
    const loginData = {
      email: e.currentTarget?.email?.value,
      password: e.currentTarget?.password?.value,
    };

    login(loginData);
    // console.log(loginData);
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
        <Btn type="submit" disabled={status === "pending"}>
          Login
        </Btn>
        {/* <Btn
          disabled={status === "pending"}
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
        </Btn> */}
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
