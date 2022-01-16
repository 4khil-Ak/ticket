import React from "react";
import { Link } from "react-router-dom";
const MoviesCard = (props) => {
  return (
    <>
      <div className="card">
        <Link className="stretched-link" to={`/moviedetails/${props.List.secret}`} key={props.List.secret}></Link>
        <div className="movie-image">
          <img
            className="img-fluid"
            src="/images/eventbanner.jpg"
            alt="movie name"
          />
        </div>
        <div className="movie-content">
          <h5 className="title m-0">{props.List.title}</h5>
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
    </>
  );
};

export default MoviesCard;