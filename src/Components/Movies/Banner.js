import React from "react";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-bg bg_img movies-bg bg-fixed"></div>
      <div className="container">
        <div className="banner-content">
          <h1 className="title cd-headline clip">
            <span>
              Get <b className="color-theme is-visible">Movie</b> Tickets
            </span>
          </h1>
          <p>Buy movie tickets in advance, find ,movie times and much more</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
