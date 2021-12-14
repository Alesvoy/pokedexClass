import React, { Component } from "react";

export class Card extends Component {
  render() {
    if (this.props.data[0] === null) {
      return (
        <div className="card">
          <img src={`${this.props.img}`} alt="Pokemon" />
          <p>#{this.props.number}</p>
          <h3>{this.props.name}</h3>
          {this.props.types.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      );
    }

    return (
      <div className="card">
        <img src={`${this.props.data.sprites.front_default}`} alt="Pokemon" />
        <p>#{this.props.data.id}</p>
        <h3>{this.props.data.name}</h3>
        {this.props.data.types.map((item) => {
          return <p key={item.type.name}>{item.type.name}</p>;
        })}
      </div>
    );
  }
}

Card.defaultProps = {
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  number: "001",
  name: "Bulbasaur",
  types: ["Grass", "Poison"],
};

export default Card;
