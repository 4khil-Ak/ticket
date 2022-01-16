import React, { useEffect, useState } from "react";
import Card from "./Card";

const Grid = (props) => {
  return (
    <div className="row">
      {props.eventsList!== null && props.eventsList.map((data) => {
        return (
          <div className="mobile-responsive col-6 col-sm-4 col-xl-3 pb-4" key={data.secret} >
            <Card data={data} />
          </div>
        )
      })}
    </div>
  );
};

export default Grid;