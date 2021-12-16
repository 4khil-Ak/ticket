import React from "react";

const Section = () => {
    return (
        <section className="about-section padding-top padding-bottom">
            <div className="container">
                <div className="row jusitfy-content-between">
                    <div className="col-lg-6">
                        <div class="about-content m-0">
                            <span class="cate">we are Ticketezy </span>
                            <h2 class="title">Get to know us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <a href="#0" class="custom-button">book tickets</a>
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