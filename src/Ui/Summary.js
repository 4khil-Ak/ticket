import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Summary = () => {
  let params = useParams();
  const { state } = useLocation();
  console.log(params.id,state);
  return <></>;
};

export default Summary;
