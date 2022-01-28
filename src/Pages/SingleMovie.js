import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/EventSingle/Banner";
import Details from "../Components/MoviesSingle/Details";
import AboutEvent from "../Components/MoviesSingle/AboutEvent";
import Gallery from "../Components/EventSingle/Gallery";
import Organizer from "../Components/EventSingle/Organizer";
import Axios from "axios";
import Loader from "../Ui/Loader";
import TicketCount from "../Ui/TicketsCount";

const SingleMovie = (props) => {
    let params = useParams();
    const [error, setError] = useState(null);
    let url = `https://apidev.ticketezy.com/movies`;
    const [show, setShow] = useState(false);
    const [singleMovieDetails, setSingleMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setLoading(false);
            setSingleMovieDetails(res.data);
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

    const [count, setCount] = useState({
        count: "1",
    });
    const bookMyTicket = () => {
        if (count.count === "") {
            setError("Enter valid count")
        } else if (count.count >= 50) {
            setError("Seats not available")
        } else {
            alert("No Data available")
            setShow(false);
        }
    }
    const ticketlayout = () => {
        setShow(true);
    }
    const closeHandler = () => {
        setShow(false);
    }
    let ui = null;
    if (singleMovieDetails === null) {
        ui = <>
            {loading && <Loader />}
        </>
    } else {
        ui = singleMovieDetails.filter(x => x.secret === params.id).map((data) => {
            return (
                <div key={data.secret}>
                    <Banner />
                    <Details details={data} book={() => ticketlayout(data)} />
                    <AboutEvent details={data} />
                    <Gallery details={data} />
                    <Organizer details={data} />
                </div>
            )
        })
    }
    return (
        <>
            {singleMovieDetails && ui}
            {show && <TicketCount closeHandler={closeHandler} onChangeHandler={onChangeHandler} bookMyTicket={bookMyTicket} error={error} count={count} />}
            {loading && <Loader />}
        </>
    )
}

export default SingleMovie;