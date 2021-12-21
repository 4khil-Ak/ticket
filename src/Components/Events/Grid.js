import React, { useEffect, useState } from "react";
import Card from "./Card";

const Grid = (props) => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    let list = [];
    list.push(...props.eventsList);
    setEvents(list);
  }, []);

  return (
    <div className="row">
      {events !== null && events.map((data) => {
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
