import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import EventsCard from "../../Reusable/EventsCard";
import Loader from "../../Ui/Loader";
import Axios from "axios";

const options = {
  loop: true,
  margin: 30,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    750: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

const EventsOwl = () => {
  const url = "https://apidev.ticketezy.com/events_list";
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      setLoading(false)
      setEvents(res.data);
    })
  }, [])
  let ui = null;
  if (events === null) {
    ui = <>Loading...</>
  } else {
    ui = <>
      {events !== null && events.map((data) => {
        return (
          <EventsCard eventsList={data} key={data.secret} />
        )
      })}
    </>
  }
  return (
    <>
      <OwlCarousel className="owl-theme owl-carousel" {...options}>
        {ui}
      </OwlCarousel>
      {loading && <Loader />}
    </>
  );
};

export default EventsOwl;