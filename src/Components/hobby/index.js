import React, { Component } from "react";
import "./style.css";

class Hobby extends Component {
  render() {
    return (
      <div className="hobbyContainer">
        <img src={this.props.avatar} alt={this.props.alt} className="avatar" />
        <div>
          {this.props.text} <br />
          <br />
          If you dont understand norwegian, use google translate.
        </div>
      </div>
    );
  }
}

export default Hobby;
