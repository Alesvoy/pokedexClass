import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";

import pokemon from "./api/pokemon";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      data: new Array(16).fill(null),
      allPokemonNames: [],
    };
  }

  updateValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  updateData = (newData) => {
    this.setState({
      data: newData,
    });
  };

  componentDidMount = async () => {
    const response = await pokemon.get("", {
      params: { limit: 898 },
    });

    let pokemonsData = [];
    let allPokemonData = [];

    for (let i = 0; i < 16; i++) {
      const pokemonData = await pokemon.get(
        `/${response.data.results[i].name}`
      );
      pokemonsData.push(pokemonData.data);
    }

    for (let i = 0; i < 898; i++) {
      allPokemonData.push(response.data.results[i].name);
    }

    this.setState({
      data: pokemonsData,
      allPokemonNames: allPokemonData,
    });
  };

  render() {
    return (
      <>
        <Header
          searchValue={this.state.searchValue}
          updateValue={this.updateValue}
          data={this.state.data}
          updateData={this.updateData}
          allPokemonNames={this.state.allPokemonNames}
        />
        <Display data={this.state.data} />
      </>
    );
  }
}

export default App;
