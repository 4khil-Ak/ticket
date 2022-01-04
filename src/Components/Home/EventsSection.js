import React from "react";
import EventsOwl from "./EventsOwl";
import $ from "jquery";

const EventsSection = (props) => {
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
        <EventsOwl />
      </div>
    </section>
  );
};

export default EventsSection;