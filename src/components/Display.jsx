import React, { Component } from "react";
import Card from "./Card";

export class Display extends Component {
  render() {
    return (
      <div className="display">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Display;
