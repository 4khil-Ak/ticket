import React from "react";
import Grid from "./Grid";
import Filters from "./Filters";

const Browse = () => {
  return (
    <section className="events-section padding-top padding-bottom">
      <div className="row">
        <div className="col-md-3 col-lg-3 px-2 py-3">
          <Filters />
        </div>
        <div className="col-md-9 col-lg-9 px-1 py-3">
          <Grid />
        </div>
      </div>
    </section>
  );
};

export default Browse;
