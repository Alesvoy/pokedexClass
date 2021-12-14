import React, { Component } from "react";

export default class PokemonDetails extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <header>
          <h1>Pokédex</h1>
        </header>
        <h1>{data.name}</h1>
      </>
    );
  }
}
