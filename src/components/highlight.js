import React from "react";
import "../css/highlight.css";
import image from "../assets/1.png";

export const Highlight = () => {
  return (
    <div className="container2">
      <div>
        <img src={image} alt="none" className="image"></img>
      </div>

      <div className="items2">
        <h2>Highlight Informations</h2>

        <p className="content">
          With the conditional formatting option, you can effortlessly detect
          critical issues and identify patterns and trends. Easy! It can help
          you to notice your important data first.
        </p>
      </div>
    </div>
  );
};
