import React from "react";
import { useNavigate } from "react-router-dom";

const MoviesCard = (props) => {
    let navigate = useNavigate();
    const moviesUpdate = (data) => {
        navigate(
            "/moviedetails", { state: { data } }
        );
    };
    return (
        <>
            {props.eventsList !== null && props.eventsList.map((data) => {
                return (
                    <div className="card" key={data.secret}>
                        <div onClick={() => moviesUpdate(props.data)} className="stretched-link"></div>
                        <div className="movie-image">
                            <img
                                className="img-fluid"
                                // src="http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
                                src="/images/eventbanner.jpg"
                                alt="movie name"
                            />
                        </div>
                        <div className="movie-content">
                            <h5 className="title m-0">{data.title}</h5>
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
                )
            })}
        </>
    );
};

export default MoviesCard;