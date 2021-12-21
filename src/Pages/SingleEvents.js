import React, { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { eventData } from "../Json/Events";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/EventSingle/Details";
import AboutEvent from "../Components/EventSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";
import Footer from "../Components/Footer/Footer";

let eventId = "";
const SingleEvent = (value) => {
    const [singleEventDetails, setSingleEventDetails] = useState(null);
    const location = useLocation();
    useEffect(()=>{
        const list = location.state.data;
        setSingleEventDetails(list);
    },[])
    console.log(singleEventDetails);

    return (
        <>
            <Navbar />
            <Banner />
            <Details details={singleEventDetails} />
            <AboutEvent />
            <Gallery />
            <Organizer />
            <Footer />
        </>
    )
}

export default SingleEvent;