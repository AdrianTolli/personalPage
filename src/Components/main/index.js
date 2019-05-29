import React, { Component } from "react";
import Portrait from "./portrait";
import MainInfo from "./mainInfo";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Portrait />
        <MainInfo />
      </div>
    );
  }
}

export default Main;
