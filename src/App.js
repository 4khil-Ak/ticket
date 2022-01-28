import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Events from "./Pages/Events";
import Movies from "./Pages/Movies";
import SingleEvent from "./Pages/SingleEvents";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import SingleMovie from "./Pages/SingleMovie";
import PageNotFound from "./Ui/PageNotFound";
import Summary from "./Ui/Summary";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/" element={<Home />}>
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="eventdetails">
            <Route exact index path=":id/summary" element={<Summary />}></Route>
            <Route exact index path=":id" element={<SingleEvent />}></Route>
          </Route>
          <Route exact path="events" element={<Events />}></Route>
          <Route exact path="moviedetails">
            <Route exact path=":id" element={<SingleMovie />}></Route>
          </Route>
          <Route exact path="movies" element={<Movies />}></Route>
          <Route exact index element={<Dashboard />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}
