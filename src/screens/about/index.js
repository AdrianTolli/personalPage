import React, { Component } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import SlideShow from "../../Components/slideShow";
import AboutInfo from "../../Components/aboutInfo";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="aboutContainer">
          <div className="slide">
            <SlideShow />
          </div>
          <div className="info">
            <AboutInfo />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
