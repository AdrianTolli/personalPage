import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
