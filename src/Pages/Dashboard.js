import React from "react";
import Banner from "../Components/Home/Banner";
import Search from "../Components/Home/Search";
import MoviesSection from "../Components/Home/MoviesSection";
import EventsSection from "../Components/Home/EventsSection";

const Dashboard = () => {
    let eventData = [{ title: 1, id: 1 }, { title: 2, id: 2 },{ title: 3, id: 3 }, { title: 4, id: 4 }]
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