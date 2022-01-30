import React from "react";

const TermsAndConditions = (props) => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="terms-modal p-3">
        <i className="float-right fas fa-close" role="button" onClick={props.onCloseHandler}></i>
        <h4 className="text-center pt-2">Terms & Conditions</h4>
        <ol className ="pl-3">
            <li>
                Collect your Tickets 1 Hour before (depends upon cinema Noms)
            </li>
            <li>
                Outside foods are not allowed
            </li>
            <li>
                Alcohal and smoking is not allowed in the cinema
            </li>
            <li>
                For tickets that are cancelled manually by 3 Hours prior to the showtime, <b>Booking Fee</b> & <b>30%</b> amount will be detected as Cancellation charge. This amount is non refundable.
            </li>
            <li>
                Incase of show cancelled, failure transaction or technical issue your amount will be refunded automatically <b>within 5 Bank working days</b>
            </li>
        </ol>
      </div>
    </>
  );
};

export default TermsAndConditions;
