import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";

class SlideShow extends Component {
  constructor() {
    super();
  }

  render() {
    const portrait2 = require("../../Images/portrait2.jpg");
    const portrait3 = require("../../Images/portrait3.jpg");
    const portrait4 = require("../../Images/portrait4.jpg");

    const slideImages = [portrait2, portrait3, portrait4];

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    };

    return (
      <div className="sliderContainer">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
          </div>
        </Slide>
      </div>
    );
  }
}

export default SlideShow;
