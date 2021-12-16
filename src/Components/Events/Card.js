import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="card">
            <Link to="/eventdetails" className="stretched-link"></Link>
            <div className="event-date">
                <h6>24</h6>
                <p>Dec</p>
            </div>
            <div className="movie-image">
                <img
                    className="img-fluid"
                    src="/images/eventbanner.jpg"
                    alt="movie name"
                />
            </div>
            <div className="movie-content">
                <h5 className="title m-0">mars</h5>
                <ul className="movie-rating">
                    <li>
                        <div className="thumb">
                            <img src="/images/heart.png" alt="movie" />
                        </div>
                        <span className="content">88%</span>
                    </li>
                    <li>
                        <div className="thumb">
                            <img src="/images/like.png" alt="movie" />
                        </div>
                        <span className="content">100%</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
