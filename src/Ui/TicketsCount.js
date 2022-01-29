import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const TicketCount = (props) => {
  let navigate = useNavigate();
  const [cat, setCat] = useState([]);
  useEffect(() => {
    setCat(Object.keys(props.singleEventDetails["seat_details"].seats));
  }, []);
  const titleCase = (str) => {
    return str
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  const toTime = (time) => {
    var d = new Date(time * 1000);
    var value = d.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
    return value;
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className="inner-modal">
        <div className="special" onClick={props.closeHandler} role="button">
          <i className="fas fa-close"></i>
        </div>
        <div className="pb-2 d-none d-md-block">
          {props.error && <Alert variant="danger">{props.error}</Alert>}
        </div>
        <h5 className="mb-2 text-white">Enter Number of Tickets</h5>
        <input
          type="number"
          name="count"
          id="count"
          value={props.ticketData.count}
          onChange={props.onChangeHandler}
        />
        <div className="row">
          <h5 className="mb-2 w-100 text-white">Pick a Category</h5>
          {cat.map((value, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 p-2" key={index}>
                <input
                  type="radio"
                  onChange={props.onChangeHandler}
                  name="category"
                  id={value}
                  value={value}
                />
                &ensp;
                <label htmlFor={value} role="button">
                  <span className="text-danger">{titleCase(value)}&nbsp;</span>
                  <small>
                    (&ensp;<i className="fas fa-rupee-sign"></i>{" "}
                    {props.singleEventDetails["seat_details"].price_card[value]}
                    &ensp;)
                  </small>
                </label>
                <p className="text-danger">
                  <span className="text-white">Available Seats - </span>
                  {
                    props.singleEventDetails["seat_details"].seats[value]
                      .available_seats
                  }
                </p>
              </div>
            );
          })}
        </div>
        <div className="row">
          <h5 className="mb-2 w-100 text-white">Pick Show Time</h5>
          {props.singleEventDetails.schedule_details.schedules.map((value) => {
            return (
              <div className="col-12 row p-2 text-left" key={value.date}>
                <>
                  <span className="px-3 py-2 text-danger">{value.date}</span>
                  {value.times.map((time) => {
                    return (
                      <span className="row px-2 align-items-center" key={time}>
                        <input
                          type="radio"
                          onChange={props.onChangeHandler}
                          name="time"
                          id={time}
                          value={time}
                          style={{ marginTop: "-4px" }}
                        />
                        <label htmlFor={time} className="pl-2 m-0 text-white">
                          {toTime(time)}
                        </label>
                      </span>
                    );
                  })}
                </>
              </div>
            );
          })}
        </div>
        <br />
        <div className="pb-2 d-md-none">
          {props.error && <Alert variant="danger">{props.error}</Alert>}
        </div>
        <div className="btn" role="button" onClick={props.confirmTickets}>
          Book Tickets
        </div>
        {/* <p className="p-2 mt-2"><span>Total Seats : {props.data.total_seats}</span>&ensp;&ensp;<span>Available Seats : {props.data.seats_available}</span></p> */}
      </div>
    </>
  );
};
export default TicketCount;
