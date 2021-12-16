import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import SingleEvent from "./Pages/SingleEvents";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/eventdetails" element={<SingleEvent />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
