import React from "react";
import "./style.css";

function Portrait() {
  const portrait = require("../../../Images/portrait1.jpg");
  return (
    <div>
      <img className="Portrait-img" src={portrait} />
    </div>
  );
}

export default Portrait;
