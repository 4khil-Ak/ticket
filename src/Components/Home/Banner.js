import React from "react";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-bg bg_img bg-fixed"></div>
      <div className="container">
        <div className="banner-content">
          <h1 className="title  cd-headline clip">
            <span className="d-block">book your</span> tickets for&nbsp;
            <span
              className="color-theme cd-words-wrapper p-0 m-0"
              // style={{ width: "269.351px", overflow: "hidden" }}
            >
              <b className="is-visible">Movie</b>
              <b className="is-hidden">Event</b>
            </span>
          </h1>
          {/* <h1 class="main-heading-title"><span class="main-element themecolor" data-elements=" Reservation, Reservation, Reservation"></span></h1> */}
          <p>
            Safe, secure, reliable ticketing.Your ticket to live entertainment!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
