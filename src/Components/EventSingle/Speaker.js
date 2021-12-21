import React from "react";

const Speaker = () => {
    return (
        <div className="speaker-item">
            <div className="speaker-thumb">
                <img src="/images/speaker.jpg" alt="speaker" />
            </div>
            <div className="speaker-content">
                <h5 className="title">
                    Grass Hopper
                </h5>
                <span>lead speaker</span>
            </div>
        </div>
    )
}

export default Speaker;