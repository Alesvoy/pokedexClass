import React, { Component } from "react";
import Header from "./components/Header";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
    };
  }

  updateValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    return (
      <>
        <Header
          searchValue={this.state.searchValue}
          updateValue={this.updateValue}
        />
      </>
    );
  }
}

export default App;
