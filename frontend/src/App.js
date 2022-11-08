import { Routes, Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Registration from "./pages/registration";
import { useState } from "react";

function App() {
  // let [user,setUser] = useState({})
  // let users = useSelector((state)=>state)
  // setTimeout(()=>{
  //   setUser(users.user.userInfo)
  // },2000)

  return (
    <>
    {/* {user && <Navbar/>} */}
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/registration" element={<Registration />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/profile" element={<Profile />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
