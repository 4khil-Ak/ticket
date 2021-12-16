import React from "react";

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="row">
                        <div className="col-sm-6 p-0">
                            <img src="/images/gallery01.jpg" alt="eventsgallery" />
                        </div>
                        <div className="col-sm-6 p-0">
                            <div className="inner-div">
                                <img src="/images/gallery02.jpg" alt="eventsgallery" />
                            </div>
                            <div className="inner-div">
                                <img src="/images/gallery03.jpg" alt="eventsgallery" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <img src="/images/gallery04.jpg" alt="eventsgallery" />
                </div>
            </div>
        </section>
    )
}
export default Gallery