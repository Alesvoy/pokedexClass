import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";

import pokemon from "./api/pokemon";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      data: new Array(12).fill(null),
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
      params: { limit: 12 },
    });

    let pokemonsData = [];

    for (let i = 0; i < 12; i++) {
      const pokemonData = await pokemon.get(
        `/${response.data.results[i].name}`
      );
      pokemonsData.push(pokemonData.data);
    }

    this.setState({
      data: pokemonsData,
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
        />
        <Display data={this.state.data} />
      </>
    );
  }
}

export default App;
