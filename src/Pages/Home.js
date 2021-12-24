import React from "react";
import "../Css/User.css";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Home/Banner";
import Search from "../Components/Home/Search";
import EventsSection from "../Components/Home/EventsSection";
import Footer from "../Components/Footer/Footer";
import { eventData } from "../Json/Events";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Search />
      <EventsSection filter={eventData}/>
      <Footer />
    </>
  );
};

export default Home;