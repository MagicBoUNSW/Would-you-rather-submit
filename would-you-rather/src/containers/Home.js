import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Would You Rather?</h1>
          <p>Play or not Play</p>
        </div>
      </div>
    );
  }
}