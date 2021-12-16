import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Speaker from "./Speaker";

const options = {
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
        750: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
};

const Organizer = () => {
    return (
        <section class="speaker-section padding-bottom padding-top">
            <div class="container">
                <div class="about-content">
                    <span class="cate">listen to the</span>
                    <h2 class="title">event speakers</h2>
                    <p>World is committed to making participation in the event a harassment free experience for
                        everyone, regardless of level of experience, gender, gender identity and expression</p>
                </div>
                <div class="speaker-slider">
                    <OwlCarousel className="owl-theme owl-carousel" {...options}>
                        <Speaker />
                        <Speaker />
                        <Speaker />
                        <Speaker />
                        <Speaker />
                        <Speaker />
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Organizer