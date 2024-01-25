import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MainNavigator from "./navigator/MainNavigator";
import UserDataContext from "./context/UserDataContext";
import { useState } from "react";
import AllEmployeesContext from "./context/AllEmployeesContext";

function App() {
  const [userData, setUserData] = useState<any>({});
  const [allEmps, setAllEmps] = useState<any>({});
  return (
    <div
      style={{ width: "100%", minHeight: "100vh" }}
      className="main-container"
    >
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <AllEmployeesContext.Provider value={{ allEmps, setAllEmps }}>
          <MainNavigator />
        </AllEmployeesContext.Provider>
      </UserDataContext.Provider>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
