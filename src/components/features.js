import React from "react";
import "../css/features.css";

export const Features = ({ features }) => {
  return (
    <>
      <div className="container">
        <h2 className="title">
          Keep focus on profit, the rest of the things we do for you
        </h2>
        <div className="items">
          {features.map((feature, index) => (
            <div key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
