import { Route, Routes } from "react-router-dom";
import Landing from './../pages/Landing/Landing';
import Login from './../pages/Login/Login';
import Signup from './../pages/Signup/Signup';

function App() {
  return (
  <div style={{width:"100%", minHeight:"100vh"}} className="main-container">
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </div>
    )
}

export default App;
