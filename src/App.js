import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Display from "./components/Display";
import PokemonDetails from "./pages/PokemonDetails";

import pokemon from "./api/pokemon";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      data: new Array(16).fill(null),
      allPokemonNames: [],
      pokemonDetails: {},
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

  updatePokemonDetails = (data) => {
    this.setState({
      pokemonDetails: data,
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
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header
                  searchValue={this.state.searchValue}
                  updateValue={this.updateValue}
                  data={this.state.data}
                  updateData={this.updateData}
                  allPokemonNames={this.state.allPokemonNames}
                />
                <Display
                  data={this.state.data}
                  updatePokemonDetails={this.updatePokemonDetails}
                />
              </>
            }
          ></Route>
          <Route
            path="/pokemon/*"
            element={<PokemonDetails data={this.state.pokemonDetails} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
