import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./screens/home";
import Hobbies from "./screens/hobbies";
import About from "./screens/about";

class router extends Component {
  render() {
    return (
      <div className="height100">
        <Route path="/" exact component={Home} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default router;
