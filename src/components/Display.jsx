import React, { Component } from "react";
import Card from "./Card";

export class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[0] === null) {
      return (
        <div>
          <h1>Loading!</h1>
        </div>
      );
    }

    return (
      <div className="display">
        {this.props.data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

export default Display;
