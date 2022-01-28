import React from "react";

const Speaker = (props) => {
    return (
        <div className="speaker-item">
            <div className="speaker-thumb">
                <img src="/images/speaker.jpg" alt="speaker" />
            </div>
            <div className="speaker-content">
                <h5 className="title">
                    {props.data.name}
                </h5>
                {/* <span>lead speaker</span> */}
            </div>
        </div>
    )
}

export default Speaker;