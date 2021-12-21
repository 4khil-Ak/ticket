import React from "react";

const Details = (props) => {
    return (
        <section className="details padding-top pt-lg-0">
            <div className="container">
                <div className="bg-img">
                    <div class="row">
                        <div class="left">
                            <h3 class="title">Digital Marketing Conference -2020</h3>
                        </div>
                        <div class="right">
                            <ul class="countdown">
                                <li>
                                    <h2><span class="days">302</span></h2>
                                    <p class="days_text">Days</p>
                                </li>
                                <li>
                                    <h2><span class="hours">20</span></h2>
                                    <p class="hours_text">Hours</p>
                                </li>
                                <li>
                                    <h2><span class="minutes">45</span></h2>
                                    <p class="minu_text">min</p>
                                </li>
                                <li>
                                    <h2><span class="seconds">16</span></h2>
                                    <p class="seco_text">sec</p>
                                </li>
                            </ul>
                            <a href="#0" class="custom-button">book tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;