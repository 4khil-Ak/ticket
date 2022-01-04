import React from "react";
import $ from "jquery";

const Counter = () => {

    $(document).ready(function () {
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true)
                $('.counter').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
        }, { threshold: [1] });

        observer.observe(document.querySelector("#counter"));
    });

    return (
        <section className="counter-section padding-bottom padding-top">
            <div className="container" id="counter">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="about-content mb-lg-0">
                            <span className="cate">quick facts</span>
                            <h2 className="title">fun facts</h2>
                            <p>Objectively seize scalable metrics whereas proactive services seamlessly empower fully researched growth strategies</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about-counter">
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="/images/counter01.png" alt="about" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title counter">30</h3>
                                    <h3 className="title">M+</h3>
                                </div>
                                <span className="d-block info">Customers</span>
                            </div>
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="/images/counter02.png" alt="about" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title counter">30</h3>
                                </div>
                                <span className="d-block info">Contries</span>
                            </div>
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="/images/counter03.png" alt="about" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title counter">650</h3>
                                    <h3 className="title">+</h3>
                                </div>
                                <span className="d-block info">Towns &amp; Cities</span>
                            </div>
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="/images/counter04.png" alt="about" />
                                </div>
                                <div className="counter-content">
                                    <h3 className="title counter">5000</h3>
                                    <h3 className="title">+</h3>
                                </div>
                                <span className="d-block info">Screens</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;