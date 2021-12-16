import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/EventSingle/Details";
import AboutEvent from "../Components/EventSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";
import Footer from "../Components/Footer/Footer";

const SingleEvent = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Details />
            <AboutEvent />
            <Gallery />
            <Organizer />
            <Footer />
        </>
    )
}

export default SingleEvent;