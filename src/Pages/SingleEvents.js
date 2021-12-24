import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { eventData } from "../Json/Events";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/EventSingle/Details";
import AboutEvent from "../Components/EventSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";
import Footer from "../Components/Footer/Footer";

const SingleEvent = (props) => {
    const [singleEventDetails, setSingleEventDetails] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const list = location.state.data;
        setSingleEventDetails(list);
    }, [])
    let ui = null;
    if (singleEventDetails !== null) {
        ui = (<>
            <Navbar />
            <Banner />
            <Details details={singleEventDetails} />
            <AboutEvent details={singleEventDetails} />
            <Gallery details={singleEventDetails} />
            <Organizer details={singleEventDetails} />
            <Footer />
        </>
        )
    }
    return (
        ui
    )
}

export default SingleEvent;