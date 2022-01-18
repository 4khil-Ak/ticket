import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/EventSingle/Details";
import AboutEvent from "../Components/EventSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";
import Axios from "axios";
import Loader from "../Ui/Loader";
import TicketCount from "../Ui/TicketsCount";

const SingleEvent = (props) => {
    let params = useParams();
    let url = `https://apidev.ticketezy.com/event_details/${params.id}`;
    const [singleEventDetails, setSingleEventDetails] = useState(null);
    const [ticketData, setTicketData] = useState(null);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cat, setCat] = useState({
        price: "150"
    });
    const [count, setCount] = useState({
        count: "1",
    });

    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setLoading(false);
            setSingleEventDetails(res.data);
        })
    }, [])

    const onChangeHandler = (event) => {
        let val = event.target.value;
        setCount((prevState) => {
            return {
                ...prevState,
                [event.target.id]: val
            }
        })
    }

    const catChangeHandler = (event) => {
        let val = event.target.value;
        setCat((prevState) => {
            return {
                ...prevState,
                [event.target.name]: val
            }
        })
    }
    const bookMyTicket = () => {
        if (count.count === "") {
            setError("Enter valid count")
        } else if (count.count >= props.data.seats_available) {
            setError("Seats not available")
        } else {
        }
        setShow(false);
    }
    const closeHandler = () => {
        setShow(false);
    }
    let ui = <div>
        <Banner details={singleEventDetails} />
        <Details details={singleEventDetails} book={() => bookMyTicket(data)} />
        <AboutEvent details={singleEventDetails} />
        <Gallery details={singleEventDetails} />
        <Organizer details={singleEventDetails} />
    </div>
    return (
        <>
            {singleEventDetails && ui}
            {show && <TicketCount data={ticketData} closeHandler={closeHandler} onChangeHandler={onChangeHandler} catChangeHandler={catChangeHandler} bookMyTicket={bookMyTicket} error={error} count={count} />}
            {loading && <Loader />}
        </>
    )
}

export default SingleEvent;