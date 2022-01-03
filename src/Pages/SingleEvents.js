import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/EventSingle/Details";
import AboutEvent from "../Components/EventSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";

const SingleEvent = (props) => {
    let params = useParams();
    const [singleEventDetails, setSingleEventDetails] = useState(null);
    console.log(params.id);
    let ui = null;
    if (singleEventDetails !== null) {
        ui = (<>
            <Banner />
            <Details details={singleEventDetails} />
            <AboutEvent details={singleEventDetails} />
            <Gallery details={singleEventDetails} />
            <Organizer details={singleEventDetails} />
        </>
        )
    }
    return (
        ui
    )
}

export default SingleEvent;