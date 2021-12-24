import React from "react";
import Grid from "./Grid";
import Filters from "./Filters";

const Browse = (props) => {
  let arr = props.filter;
  return (
    <section className="events-section padding-top padding-bottom">
      <div className="row">
        <div className="col-md-3 col-lg-3 px-2 py-3">
          <Filters handlefilters={props.handlefilters} handleclear={props.handleclear} />
        </div>
        <div className="col-md-9 col-lg-9 px-1 py-3">
          <Grid eventsList={arr} />
        </div>
      </div>
    </section>
  );
};

export default Browse;