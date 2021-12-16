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
        <section class="counter-section padding-bottom padding-top">
            <div class="container" id="counter">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="about-content mb-lg-0">
                            <span class="cate">quick facts</span>
                            <h2 class="title">fun facts</h2>
                            <p>Objectively seize scalable metrics whereas proactive services seamlessly empower fully researched growth strategies</p>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="about-counter">
                            <div class="counter-item">
                                <div class="counter-thumb">
                                    <img src="/images/counter01.png" alt="about" />
                                </div>
                                <div class="counter-content">
                                    <h3 className="title counter">30</h3>
                                    <h3 class="title">M+</h3>
                                </div>
                                <span class="d-block info">Customers</span>
                            </div>
                            <div class="counter-item">
                                <div class="counter-thumb">
                                    <img src="/images/counter02.png" alt="about" />
                                </div>
                                <div class="counter-content">
                                    <h3 className="title counter">30</h3>
                                </div>
                                <span class="d-block info">Contries</span>
                            </div>
                            <div class="counter-item">
                                <div class="counter-thumb">
                                    <img src="/images/counter03.png" alt="about" />
                                </div>
                                <div class="counter-content">
                                    <h3 className="title counter">650</h3>
                                    <h3 class="title">+</h3>
                                </div>
                                <span class="d-block info">Towns &amp; Cities</span>
                            </div>
                            <div class="counter-item">
                                <div class="counter-thumb">
                                    <img src="/images/counter04.png" alt="about" />
                                </div>
                                <div class="counter-content">
                                    <h3 className="title counter">5000</h3>
                                    <h3 class="title">+</h3>
                                </div>
                                <span class="d-block info">Screens</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;