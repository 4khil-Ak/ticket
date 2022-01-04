import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    items: 1,
};

const Client = () => {
    return (
        <section className="client-section padding-bottom padding-top bg_img">
            <div className="container">
                <div className="about-content">
                    <span className="cate">testimonials</span>
                    <h2 className="title">the fans have spoken</h2>
                </div>
                <OwlCarousel className="owl-theme owl-carousel" {...options}>
                    <div className="client-item">
                        <div className="client-thumb">
                            <img src="/images/client01.jpg" alt="client" />
                        </div>
                        <div className="client-content">
                            <h5 className="title">Shahidul</h5>
                            <span className="info"><i className="fas fa-check"></i> Verified</span>
                            <blockquote className="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                    <div className="client-item">
                        <div className="client-thumb">
                            <img src="/images/client02.jpg" alt="client" />
                        </div>
                        <div className="client-content">
                            <h5 className="title">Shahidul</h5>
                            <span className="info"><i className="fas fa-check"></i> Verified</span>
                            <blockquote className="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                    <div className="client-item">
                        <div className="client-thumb">
                            <img src="/images/client03.jpg" alt="client" />
                        </div>
                        <div className="client-content">
                            <h5 className="title">Shahidul</h5>
                            <span className="info"><i className="fas fa-check"></i> Verified</span>
                            <blockquote className="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                    <div className="client-item">
                        <div className="client-thumb">
                            <img src="/images/client01.jpg" alt="client" />
                        </div>
                        <div className="client-content">
                            <h5 className="title">Shahidul</h5>
                            <span className="info"><i className="fas fa-check"></i> Verified</span>
                            <blockquote className="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Client;