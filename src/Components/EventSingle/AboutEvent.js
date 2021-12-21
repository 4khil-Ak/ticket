import React from "react";

const AboutEvent = (props) => {
    return (
        <section className="about-section padding-top padding-bottom">
            <div className="container">
                <div className="row jusitfy-content-between flex-wrap-reverse">
                    <div className="col-lg-7 col-xl-6">
                        <div className="about-content m-0">
                            <span className="cate">are you ready to attend?</span>
                            <h2 className="title">{props.details.title}</h2>
                            <p>{props.details.description}</p>
                            <a href="#0" className="custom-button">book tickets</a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
                        <div className="event-about-thumb">
                            <img src="/images/event.jpg" alt="event"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutEvent