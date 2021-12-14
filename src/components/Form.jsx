import React, { Component } from "react";
import pokemon from "../api/pokemon";

export class Form extends Component {
  onChangeHandler = (e) => {
    this.props.updateValue(e.target.value);
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    if (this.props.searchValue.length > 0) {
      const response = await pokemon.get(`/${this.props.searchValue}`);
      this.props.updateData([response.data]);
    } else if (this.props.searchValue.length === 0) {
      const response = await pokemon.get("", {
        params: { limit: 16 },
      });

      let pokemonsData = [];

      for (let i = 0; i < 16; i++) {
        const pokemonData = await pokemon.get(
          `/${response.data.results[i].name}`
        );
        pokemonsData.push(pokemonData.data);
      }

      this.props.updateData(pokemonsData);
    }
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmitHandler}>
        <div className="field">
          <input
            type="text"
            placeholder="Search by name or number..."
            value={this.props.searchValue}
            onChange={this.onChangeHandler}
          />
        </div>
      </form>
    );
  }
}

export default Form;
