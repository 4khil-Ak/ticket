import React from "react";
import Card from "./Card";

const Grid = () => {
  return (
    <div className="row">
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
      <div className="col-6 col-sm-4 col-xl-3 pb-4">
        <Card />
      </div>
    </div>
  );
};

export default Grid;
