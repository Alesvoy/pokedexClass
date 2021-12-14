import React, { Component } from "react";
import Form from "./Form";

export class Header extends Component {
  onSubmitHandler(e) {
    e.prevent.default();
  }

  onChangeHandler = (e) => {
    console.log(e.target.value);
    this.props.updateValue(e.target.value);
  };

  render() {
    return (
      <header>
        <h1>Pokédex</h1>
        <Form
          data={this.props.data}
          updateData={this.props.updateData}
          searchValue={this.props.searchValue}
          updateValue={this.props.updateValue}
        />
      </header>
    );
  }
}

export default Header;
