import React from "react";
import "../css/highlight2.css";
import image from "../assets/2.png";

export const Highlight2 = () => {
  return (
    <div className="container3">
      <div className="items3">
        <h2>Easily find data with filter </h2>

        <p className="content2">
          Add filters based on Date, Relations, or Text and always have up to
          date and customizable data, as different data can be quickly shown on
          the change of criteria. Powerful, right?!
        </p>
      </div>
      <div>
        <img src={image} alt="none" className="image2"></img>
      </div>
    </div>
  );
};
