import React from "react";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-bg bg_img events-bg bg-fixed"></div>
      <div className="container">
        <div className="banner-content">
          <h1 className="title cd-headline clip">
            <span>
              Get <b className="color-theme is-visible">Events</b> Tickets
            </span>
          </h1>
          <p>Buy event tickets in advance, find event times and much more</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
