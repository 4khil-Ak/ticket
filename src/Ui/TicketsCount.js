import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const TicketCount = (props) => {
    let navigate = useNavigate()
    const [error, setError] = useState(null);
    const [count, setCount] = useState({
        count: "1",
    });

    const onChangeHandler = (event) => {
        let val = event.target.value;
        setCount((prevState) => {
            return {
                ...prevState,
                [event.target.id]: val
            }
        })
    }

    const bookMyTicket = () => {
        if (count.count === "") {
            setError("Enter valid count")
        } else if (count.count >= props.data.seats_available) {
            setError("Seats not available")
        } else {
            alert("Proceed to payment")
            alert("Tickets booked successfully")
            navigate("/movies")
        }
    }
    return (
        <>
            <div className="backdrop" onClick={props.closeHandler}></div>
            <div className="inner-modal">
                <div className="px-3 pb-2">{error && <Alert variant="danger">{error}</Alert>}</div>
                <h5 className="mb-2 text-white">Enter Number of Tickets</h5>
                <input type="number" onChange={onChangeHandler} value={count.count} id="count" max={props.data.seats_available} name="count" /><br />
                <p className="p-2"><span>Total Seats : {props.data.total_seats}</span>&ensp;&ensp;<span>Available Seats : {props.data.seats_available}</span>&ensp;&ensp;<span>Price: {props.data.price}</span></p>
                <button type="submit" onClick={bookMyTicket}>Book Tickets</button>
            </div>
        </>
    )
}
export default TicketCount;