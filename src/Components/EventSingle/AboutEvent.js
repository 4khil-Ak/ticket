import React from "react";

const AboutEvent = () => {
    return (
        <section className="about-section padding-top padding-bottom">
            <div className="container">
                <div className="row jusitfy-content-between flex-wrap-reverse">
                    <div className="col-lg-7 col-xl-6">
                        <div class="about-content m-0">
                            <span class="cate">are you ready to attend?</span>
                            <h2 class="title">Digital Marketing Conference - <span>2020</span></h2>
                            <p>Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tristique senectus et netus et malesuada fames ac turpis egestas ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                            <a href="#0" class="custom-button">book tickets</a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
                        <div class="event-about-thumb">
                            <img src="/images/event.jpg" alt="event"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutEvent