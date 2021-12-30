import React from "react";
import Banner from "../Components/Home/Banner";
import Search from "../Components/Home/Search";
import MoviesSection from "../Components/Home/MoviesSection";
import EventsSection from "../Components/Home/EventsSection";

const Dashboard = () => {
    let eventData = [{title:1}]
    return (
        <>
            <Banner />
            <Search />
            <MoviesSection filter={eventData} />
            <EventsSection filter={eventData} />
        </>
    )
}

export default Dashboard;