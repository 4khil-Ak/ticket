import React from "react";

const Loader = () => {
    return (
        <>
            <div className="overlay"></div>
            <div className="spinner">
                <img src="/images/ripple.gif" alt="loader" />
            </div>
        </>
    )
}

export default Loader;