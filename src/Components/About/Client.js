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
        <section class="client-section padding-bottom padding-top bg_img">
            <div class="container">
                <div class="about-content">
                    <span class="cate">testimonials</span>
                    <h2 class="title">the fans have spoken</h2>
                </div>
                <OwlCarousel className="owl-theme owl-carousel" {...options}>
                    <div class="client-item">
                        <div class="client-thumb">
                            <img src="/images/client01.jpg" alt="client" />
                        </div>
                        <div class="client-content">
                            <h5 class="title">Shahidul</h5>
                            <span class="info"><i class="fas fa-check"></i> Verified</span>
                            <blockquote class="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                    <div class="client-item">
                        <div class="client-thumb">
                            <img src="/images/client02.jpg" alt="client" />
                        </div>
                        <div class="client-content">
                            <h5 class="title">Shahidul</h5>
                            <span class="info"><i class="fas fa-check"></i> Verified</span>
                            <blockquote class="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                    <div class="client-item">
                        <div class="client-thumb">
                            <img src="/images/client03.jpg" alt="client" />
                        </div>
                        <div class="client-content">
                            <h5 class="title">Shahidul</h5>
                            <span class="info"><i class="fas fa-check"></i> Verified</span>
                            <blockquote class="client-quote">
                                "Quia voluptatum animi libero recusandae error."
                            </blockquote>
                        </div>
                    </div>
                    <div class="client-item">
                        <div class="client-thumb">
                            <img src="/images/client01.jpg" alt="client" />
                        </div>
                        <div class="client-content">
                            <h5 class="title">Shahidul</h5>
                            <span class="info"><i class="fas fa-check"></i> Verified</span>
                            <blockquote class="client-quote">
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