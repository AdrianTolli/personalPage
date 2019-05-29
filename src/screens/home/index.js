import React, { Component } from "react";
import "./style.css";
import Header from "../../Components/header";
import Main from "../../Components/main";
import Footer from "../../Components/footer";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
