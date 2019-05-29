import React, { Component } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Hobby from "../../Components/hobby";
import "./style.css";

class Hobbies extends Component {
  constructor() {
    super();
    this.state = {
      volleyballText:
        "Volleyball, jeg har holdt på med volleyball siden ungdomskolen. Har spilt mine 2 siste sesonger for Farsund IL i 1. divisjon. Har også opptred som trener for nykommere i 12-16 års alderen",
      gamingText:
        "Gaming, jeg har holdt på med gaming nesten så lenge jeg kan huske, om det var gameboy, pc eller snake på min første mobil. Mye av min gaming tid er brukt på League of Legends, men i det siste har det blitt mindre og midre gaming. Det virker som at når en blir voksen så får mann andre prioriteringer"
    };
  }

  render() {
    const volleyballAvatar = require("../../Images/VolleyballAvatar.png");
    const gamingAvatar = require("../../Images/GamingAvatar.png");
    return (
      <div>
        <Header />
        <div className="hobbiesContainer">
          <Hobby
            avatar={volleyballAvatar}
            alt="volleyballAvatar"
            text={this.state.volleyballText}
          />

          <Hobby
            avatar={gamingAvatar}
            alt="gamingAvatar"
            text={this.state.gamingText}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Hobbies;
