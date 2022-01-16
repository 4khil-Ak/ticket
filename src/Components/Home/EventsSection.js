import React, { useState, useEffect } from "react";
import EventsOwl from "./EventsOwl";
import $ from "jquery";
import Loader from "../../Ui/Loader";
import Axios from "axios";

const EventsSection = (props) => {
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
  $(document).ready(function () {
    $("#option1 li").click(function () {
      $("#option1 li.active").removeClass("active");
      $(this).addClass("active");
    });
  });

  return (
    <section className="movie-section events-section padding-top padding-bottom">
      <div className="container">
        <div className="tab">
          <div className="section-header-2">
            <div className="left">
              <h2 className="title">Events</h2>
              <p className="m-0">Be sure not to miss these Events today.</p>
            </div>
            <ul className="tab-menu" id="option1">
              <li className="active">now showing</li>
              <li>coming soon</li>
              <li>exclusive</li>
            </ul>
          </div>
        </div>
        {events && <EventsOwl data={events} />}
      </div>
      {loading && <Loader />}
    </section>
  );
};

export default EventsSection;