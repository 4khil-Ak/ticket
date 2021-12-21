import React from "react";

const Details = (props) => {
    return (
        <section className="details padding-top pt-lg-0">
            <div className="container">
                <div className="bg-img">
                    return (
                    <div className="row">
                        <div className="left">
                            <h3 className="title">{props.details.title}</h3>
                        </div>
                        <div className="right">
                            <ul className="countdown">
                                <li>
                                    <h2><span className="days">302</span></h2>
                                    <p className="days_text">Days</p>
                                </li>
                                <li>
                                    <h2><span className="hours">20</span></h2>
                                    <p className="hours_text">Hours</p>
                                </li>
                                <li>
                                    <h2><span className="minutes">45</span></h2>
                                    <p className="minu_text">min</p>
                                </li>
                                <li>
                                    <h2><span className="seconds">16</span></h2>
                                    <p className="seco_text">sec</p>
                                </li>
                            </ul>
                            <a href="#0" className="custom-button">book tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;