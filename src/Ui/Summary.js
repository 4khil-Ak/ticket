import React from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const Summary = () => {
  let params = useParams();
  let navigate = useNavigate();
  const { state } = useLocation();
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
  const amountPayable = (price) => {
    var convenience = 20.4;
    var amount = price + convenience;
    return amount;
  };
  const proceed = () => {
    alert("Ticket Booked Successfully\nEnjoy your show");
    navigate(`/eventdetails/${params.id}`);
  };
  return (
    <>
      <div className="summary-header">
        <h5 className="text-danger text-center">
          {state.title} -{" "}
          <span className="m-0 text-white">Booking Summary</span>
        </h5>
      </div>
      <div className="summary-body row">
        <div className="col-sm-6 col-lg-7 p-2">
          <div className="inner p-2 bg-white text-dark">
            <input type="radio" id="mob" checked disabled />
            &ensp;
            <label htmlFor="mob">Mobile E-Ticket</label>
            <div className="p-3" style={{ background: "rgb(210, 248, 210)" }}>
              <h5 className="font-weight-bolder">Ticket Information</h5>
              <ol className="summary-list pl-3">
                <li>
                  Customer(s) will receive an e-ticket confirmation via email
                  and a copy of the ticket will be present in your profile which
                  must be presented at the counter during entry.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-5 p-2">
          <div className="inner p-2 bg-white">
            <h4 className="float-right text-dark pt-2 pr-2">
              No: of Tickets :{" "}
              <span className="text-danger">{state.count}</span>
            </h4>
            <p className="p-3 text-danger">Booking Summary</p>
            <div className="row px-2 justify-content-between">
              <div className="col-12 px-2 pt-0 show-details">
                <h4 className="m-0">{state.title}</h4>
                {state.venue} - {state.location} on{" "}
                <span className="text-danger">
                  {state.date} - {toTime(state.time)}
                </span>
              </div>
            </div>
            <div className="row px-2 justify-content-between">
              <div className="col-5 p-2 text-dark">
                {titleCase(state.category)}
              </div>
              <div className="col-5 p-2 text-danger">Rs. {state.price}.00</div>
            </div>
            <div className="row px-2 justify-content-between">
              <div className="col-5 p-2 text-dark">Convenience Fees</div>
              <div className="col-5 p-2 text-danger">Rs. 20.40</div>
            </div>
            <div className="px-2">
              <hr />
            </div>
            <div className="row px-2 justify-content-between">
              <div className="col-5 p-2 text-dark">Sub Total</div>
              <div className="col-5 p-2 text-danger">
                Rs. {amountPayable(state.price)}{" "}
                <small className="text-dark">(including gst)</small>
              </div>
            </div>
            <br />
            <br />
            <br />
            <small className="text-dark px-3">
              Your current state is{" "}
              <span className="text-danger">TamilNadu</span>
            </small>
            <div className="px-2">
              <hr />
            </div>
            <div className="row px-2 justify-content-between bg-danger">
              <div className="col-5 p-2 text-white">Amount Payable</div>
              <div className="col-5 p-2 text-white text-right">
                Rs. {amountPayable(state.price)}
              </div>
            </div>
          </div>
          <div className="conclusion p-1">
            <small className="text-dark">
              By proceeding, I express my consent to complete this transaction
            </small>
            <button className="btn btn-warning w-100" onClick={proceed}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
