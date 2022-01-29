import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  let navigate = useNavigate();
  let url = `https://apidev.ticketezy.com/event_details/${params.id}`;
  const [singleEventDetails, setSingleEventDetails] = useState(null);
  const [countDown, setCountDown] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ticketData, setTicketData] = useState({
    title: "",
    location: "",
    venue: "",
    count: "1",
    category: "",
    price: "",
    date: "",
    time: "",
  });
  useEffect(() => {
    Axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setSingleEventDetails(res.data);
      setCountDown(res.data["schedule_details"].schedules[0].times[0]);
      setLoading(false);
    });
  }, []);

  const onChangeHandler = (event) => {
    let val = event.target.value;
    setTicketData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val,
      };
    });
  };

  const confirmTickets = () => {
    ticketData.title = singleEventDetails.event_details.title;
    ticketData.location = singleEventDetails.event_details.location;
    ticketData.venue = singleEventDetails.event_details.venue;
    ticketData.price =
      singleEventDetails.seat_details.price_card[ticketData.category];
    for (
      var i = 0;
      i < singleEventDetails.schedule_details.schedules.length;
      i++
    ) {
        if (
          singleEventDetails.schedule_details.schedules[i].times.includes(
          ticketData.time
        ) == true
      ) {
        ticketData.date = singleEventDetails.schedule_details.schedules[i].date;
      }
    }
    if (ticketData.count === "") {
      setError("Ticket count cannot be zero");
    } else if (ticketData.category === "" || ticketData.price === "") {
      setError("Pick a category");
    } else if (
      ticketData.count >
      singleEventDetails.seat_details.seats[ticketData.category].available_seats
    ) {
      setError("Tickets is not available");
    } else if (ticketData.date === "") {
      setError("Pick a show Time");
    } else if (ticketData.time === "") {
      setError("Pick a show Time");
    } else {
      navigate(`summary`, { state: ticketData });
    }
  };

  const bookMyTicket = () => {
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
    setError(null);
    setTicketData({
      count: "1",
      category: "",
      price: "",
      date: "",
      time: "",
    });
  };
  let ui = (
    <div>
      <Banner details={singleEventDetails} />
      <Details details={singleEventDetails} bookMyTicket={bookMyTicket} />
      <AboutEvent details={singleEventDetails} bookMyTicket={bookMyTicket}/>
      <Gallery details={singleEventDetails} />
      <Organizer details={singleEventDetails} />
    </div>
  );
  return (
    <>
      {singleEventDetails && ui}
      {loading && <Loader />}
      {show && (
        <TicketCount
          closeHandler={closeHandler}
          ticketData={ticketData}
          onChangeHandler={onChangeHandler}
          singleEventDetails={singleEventDetails}
          confirmTickets={confirmTickets}
          error={error}
        />
      )}
    </>
  );
};

export default SingleEvent;
