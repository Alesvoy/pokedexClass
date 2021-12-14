import React, { Component } from "react";
import Card from "./Card";

export class Display extends Component {
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
          return (
            <Card
              key={item.id}
              data={item}
              updatePokemonDetails={this.props.updatePokemonDetails}
            />
          );
        })}
      </div>
    );
  }
}

export default Display;
