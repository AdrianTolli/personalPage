import React, { Component } from "react";
import "./style.css";

class AboutInfo extends Component {
  render() {
    return (
      <div className="aboutInfoContainer">
        <h1>About me:</h1>
        <p>
          My name is Adrian Tollisen. I live currently in Farsund, Norway. Im a
          computer engineer, but currently unemployed :( My most recent project
          was with my brother (who is also a computer engineer), its called
          <a href="www.spisekart.herokuapp.com"> spisekart</a>. If you're
          interested in my project visit my{" "}
          <a href="www.github.com/AdrianTolli">GitHub</a>, or check out my{" "}
          <a href="https://www.linkedin.com/in/adrian-tollisen-5765aa8a/">
            LinkedIn profile
          </a>
        </p>
        <br />
        <p>
          I dont know what more to write, you can check out my hobbies in the
          hobbies tab, there is also additional info about me at the homepage
          tab :)
        </p>
        <br />
        <p>This text is hardcoded, btw...</p>
        <br />
        <p>
          I do wana travel to a chill warm palce with all inclusive, thats me
        </p>
        <br />
        <p>Did I mention I love cakes, both dessert cakes and pancakes</p>
      </div>
    );
  }
}

export default AboutInfo;
