import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
    return (
        <section className="about-section padding-top padding-bottom">
            <div className="container">
                <div className="row jusitfy-content-between">
                    <div className="col-lg-6">
                        <div className="about-content m-0">
                            <span className="cate">we are Ticketezy </span>
                            <h2 className="title">Get to know us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <Link to={"/movies"} className="custom-button">book tickets</Link>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <img src="/images/about01.png" alt="about" style={{maxWidth: "initial"}} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;