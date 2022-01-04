const Philosophy = () => {
    return (
        <section className="philosophy-section padding-top padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 offset-lg-3 bg-two">
                        <div className="philosophy-content">
                            <div className="about-content">
                                <span className="cate">Take look at</span>
                                <h2 className="title">Our philosophy</h2>
                                <p className="ml-0">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt labore et dolore magna aliqu enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
                                </p>
                            </div>
                            <ul className="phisophy-list">
                                <li>
                                    <div className="thumb">
                                        <img src="/images/icon1.png" alt="philosophy" />
                                    </div>
                                    <h5 className="title">Honesty &amp; Fairness </h5>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <img src="/images/icon2.png" alt="philosophy" />
                                    </div>
                                    <h5 className="title">Clarity &amp; Transparency</h5>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <img src="./images/icon3.png" alt="philosophy" />
                                    </div>
                                    <h5 className="title">Focus on Customers</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy;