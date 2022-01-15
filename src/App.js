import React, { Component } from "react";
import "./scss/base.scss";
import Banner from "./component/Banner.js";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>


    </div>

  );
}

export default App;
