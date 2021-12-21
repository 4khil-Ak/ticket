import React, { useState } from "react";

// import AWS from "../Services/AWS";

const EventsContext = React.createContext({
  course: null,
  setEvents: (events) => {}
});

export const EventsContextProvider = (props) => {
  const [events, setEvents] = useState(null);

  const setMyEvents = (events) => {
    setEvents(events);
  };

  return (
    <EventsContext.Provider
      value={{
        events: events,
        setEvents: setMyEvents
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
