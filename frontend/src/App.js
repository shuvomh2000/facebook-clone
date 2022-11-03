import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Registration from "./pages/registration";

function App() {
  return (
    <>
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
