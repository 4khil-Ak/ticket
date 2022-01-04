import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import TicketCount from "../../Ui/TicketsCount";

const Card = (props) => {
    let url = `https://apidev.ticketezy.com/event_details/${props.data.secret}`
    const [show, setShow] = useState(false);
    const [ticketData, setTicketData] = useState(null);
    const [singleEvent, setSingleEvent] = useState(null);
    // console.log("details", singleEvent)
    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setSingleEvent(res.data);
        })
    }, [])

    const bookMyTicket = (details) => {
        setShow(true);
        setTicketData({
            seats_available: 40,
            total_seats: 50,
            price: 120,
            eventId: details
        })
    }
    const closeHandler = () => {
        setShow(false);
    }
    return (
        <>
            <div className="card" key={props.data.secret}>
                <Link className="stretched-link" to={`/eventdetails/${props.data.secret}`} key={props.data.secret}></Link>
                <div className="event-date">
                    <h6>24</h6>
                    <p>Dec</p>
                </div>
                <div className="movie-image">
                    <img
                        className="img-fluid"
                        src="/images/eventbanner.jpg"
                        alt="event name"
                    />
                </div>
                <div className="movie-content">
                    <h5 className="title m-0">{props.data.title}</h5>
                    <ul className="movie-rating">
                        <li>
                            <div className="thumb">
                                <img src="/images/heart.png" alt="movie" />
                            </div>
                            <span className="content">88%</span>
                        </li>
                        <li>
                            <div className="thumb">
                                <img src="/images/like.png" alt="movie" />
                            </div>
                            <span className="content">100%</span>
                        </li>
                    </ul>
                </div>
                <button type="button" class="btn btn-primary" style={{ zIndex: "5" }} onClick={() => bookMyTicket(props.data.secret)}>Book Now</button>
            </div>
            {show && <TicketCount data={ticketData} closeHandler={closeHandler} />}
        </>
    );
};

export default Card;
