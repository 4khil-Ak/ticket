import React, { useState, useEffect } from "react";
import Banner from "../Components/Home/Banner";
import Search from "../Components/Home/Search";
import MoviesSection from "../Components/Home/MoviesSection";
import EventsSection from "../Components/Home/EventsSection";
import Axios from "axios";

const Dashboard = () => {
    return (
        <>
            <Banner />
            <Search />
            <MoviesSection />
            <EventsSection />
        </>
    )
}

export default Dashboard;