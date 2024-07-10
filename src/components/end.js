import React from "react";
import "../css/end.css";
import image from "../assets/3.png";

export const End = () => {
  return (
    <>
      <div className="endc">
        <h2>More efficiently visualize your data</h2>
        <p>
          Visual representations help us to understand data easier and quicker.
          They make large volumes of data, and sometimes complicated ones,
          properly represented and with authority and clarity.{" "}
        </p>
        <img src={image} alt="k" className="imge"></img>
      </div>
    </>
  );
};
