import React, { Component } from "react";

export default class PokemonDetails extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <header>
          <h1>Pokédex</h1>
        </header>
        <div className="container">
          <img src={`${data.sprites.front_default}`} alt={data.name} />
          <h1>{data.name}</h1>
          <h3>Type</h3>
          <ul>
            {data.types.map((item) => {
              return <li key={item.slot}>{item.type.name}</li>;
            })}
          </ul>
          <h3>Stats:</h3>
          <ul>
            {data.stats.map((item) => {
              return (
                <li key={item.stat.name}>
                  {item.stat.name}: {item.base_stat}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
