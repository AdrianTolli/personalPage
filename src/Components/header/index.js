import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: ""
    };

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  componentDidUpdate() {
    this.setState({
      currentPage: ""
    });
  }

  buttonClicked(e) {
    this.setState({
      currentPage: e.target.name
    });
  }

  render() {
    if (this.state.currentPage === "homepage") {
      return <Redirect to="/" />;
    }
    if (this.state.currentPage === "hobbies") {
      return <Redirect to="/hobbies" />;
    }
    if (this.state.currentPage === "about") {
      return <Redirect to="/about" />;
    }
    return (
      <div className="Header">
        <div>
          <h1>Adrian Tollisen</h1>
        </div>
        <div className="Header-select">
          <button
            name="homepage"
            className="defaultButton"
            onClick={this.buttonClicked}
          >
            Homepage
          </button>
          <button
            name="hobbies"
            className="defaultButton"
            onClick={this.buttonClicked}
          >
            Hobbies
          </button>
          <button
            name="about"
            className="defaultButton"
            onClick={this.buttonClicked}
          >
            About
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
