import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const TicketCount = (props) => {
    let navigate = useNavigate()

    return (
        <>
            <div className="backdrop" onClick={props.closeHandler}></div>
            <div className="inner-modal">
                <div className="px-3 pb-2">{props.error && <Alert variant="danger">{props.error}</Alert>}</div>
                <div className="row">
                    <h5 className="mb-2 w-100 text-white">Pick a Category</h5>
                    <div className="col-12 col-md-4 p-2">
                        <input type="radio" onChange={props.catChangeHandler} name="category" id="silver" value="silver" />
                        &ensp;
                        <label htmlFor="silver" role="button">Silver&nbsp;<small>( <i className="fas fa-rupee-sign"></i> 99 )</small></label>
                    </div>
                    <div className="col-12 col-md-4 p-2">
                        <input type="radio" onChange={props.catChangeHandler} name="category" id="gold" value="gold" />
                        &ensp;
                        <label htmlFor="gold" role="button">Gold&nbsp;<small>( <i className="fas fa-rupee-sign"></i> 150 )</small></label>
                    </div>
                    <div className="col-12 col-md-4 p-2">
                        <input type="radio" onChange={props.catChangeHandler} name="category" id="platinum" value="platinum" />
                        &ensp;
                        <label htmlFor="platinum" role="button">Platinum&nbsp;<small>( <i className="fas fa-rupee-sign"></i> 250 )</small></label>
                    </div>
                </div>
                <h5 className="mb-2 text-white">Enter Number of Tickets</h5>
                {/* value={count.count} id="count" max={props.data.seats_available} */}
                <input type="number" onChange={props.onChangeHandler} name="count" /><br />
                <button type="submit" onClick={props.bookMyTicket}>Book Tickets</button>
                <p className="p-2 mt-2"><span>Total Seats : {props.data.total_seats}</span>&ensp;&ensp;<span>Available Seats : {props.data.seats_available}</span></p>
            </div>
        </>
    )
}
export default TicketCount;