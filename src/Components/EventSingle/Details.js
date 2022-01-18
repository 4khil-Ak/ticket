import React, { useState, useEffect } from "react";
import TicketCount from "../../Ui/TicketsCount";

const Details = (props) => {
    const [show, setShow] = useState(false);
    const [eventDetails, setEventDetails] = useState([]);
    const [ticketData, setTicketData] = useState(null);
    useEffect(() => {
        setEventDetails(props.details["event_details"])
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
            <section className="details padding-top pt-lg-0">
                <div className="container">
                    <div className="bg-img">
                        <div className="row">
                            <div className="left">
                                <h3 className="title">{eventDetails.title}</h3>
                            </div>
                            <div className="right">
                                <ul className="countdown">
                                    <li>
                                        <h2><span className="days">302</span></h2>
                                        <p className="days_text">Days</p>
                                    </li>
                                    <li>
                                        <h2><span className="hours">20</span></h2>
                                        <p className="hours_text">Hours</p>
                                    </li>
                                    <li>
                                        <h2><span className="minutes">45</span></h2>
                                        <p className="minu_text">min</p>
                                    </li>
                                    <li>
                                        <h2><span className="seconds">16</span></h2>
                                        <p className="seco_text">sec</p>
                                    </li>
                                </ul>
                                <button type="button" className="custom-button book-btn btn btn-warning" onClick={() => bookMyTicket(props.details.secret)}>Book TIcket</button>
                                {/* <span href="#0" className="custom-button" onClick={() => props.book(props.details.secret)}>book tickets</span> */}
                            </div>
                        </div>
                        <div className="row mt-3 border-0">
                            <div className="d-flex flex-wrap col-12 col-md-6 col-lg-4 p-0 p-md-2 pb-0 mb-3 m-0 mb-md-0 item">
                                <div className="icon">
                                    <i className="fas fa-place-of-worship"></i>
                                </div>
                                <div className="row flex-column pl-3 border-0">
                                    <p className="venue">{eventDetails.venue}</p>
                                    <small className="w-100">Venue</small>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap col-12 col-md-6 col-lg-4 p-0 p-md-2 pb-0 mb-3 m-0 mb-md-0 item">
                                <div className="icon">
                                    <i className="fas fa-map-pin"></i>
                                </div>
                                <div className="row flex-column pl-3 border-0">
                                    <p className="venue">{eventDetails.location}</p>
                                    <small className="w-100">Location</small>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap col-12 col-md-6 col-lg-4 p-0 p-md-2 pb-0 mb-3 m-0 mb-md-0 item">
                                <div className="icon">
                                    <i className="fas fa-stopwatch"></i>
                                </div>
                                <div className="row flex-column pl-3 border-0">
                                    <p className="venue">{eventDetails.duration}&ensp;Mins</p>
                                    <small className="w-100">Duration</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {show && <TicketCount data={ticketData} closeHandler={closeHandler} />}
        </>
    );
};

export default Details;