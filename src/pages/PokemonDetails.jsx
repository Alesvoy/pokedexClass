import React, { Component } from "react";

export default class PokemonDetails extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <h1>{data.name}</h1>
      </>
    );
  }
}
