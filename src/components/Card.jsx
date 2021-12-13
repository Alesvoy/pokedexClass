import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="Pokemon"
        />
        <p>#001</p>
        <h3>Bulbasaur</h3>
        <p>Grass</p>
        <p>Poison</p>
      </div>
    );
  }
}

export default Card;
