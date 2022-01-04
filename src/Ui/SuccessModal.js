import React from "react";

const SuccessModal = () => {
    return (
        <>
            <div className="backdrop" onClick={props.closeHandler}></div>
            <div className="success-modal"></div>
        </>
    )
}

export default SuccessModal;