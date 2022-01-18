import React, { useState, useEffect } from "react";
import TicketCount from "../../Ui/TicketsCount";

const AboutEvent = (props) => {
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
        <section className="about-section padding-top padding-bottom">
            <div className="container">
                <div className="row jusitfy-content-between flex-wrap-reverse">
                    <div className="col-lg-7 col-xl-6">
                        <div className="about-content m-0">
                            <span className="cate">are you ready to attend?</span>
                            <h2 className="title">{eventDetails.title}</h2>
                            <p>{eventDetails.description}</p>
                            <button type="button" className="custom-button book-btn btn btn-warning" onClick={() => bookMyTicket(props.details.secret)}>Book TIcket</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
                        <div className="event-about-thumb">
                            <img src="/images/event.jpg" alt="event"/>
                        </div>
                    </div>
                </div>
            </div>
            {show && <TicketCount data={ticketData} closeHandler={closeHandler} />}
        </section>
    )
}

export default AboutEvent