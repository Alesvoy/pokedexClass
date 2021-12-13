import React, { Component } from "react";

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
        <form className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Search by name or number..."
              value={this.props.searchValue}
              onChange={this.onChangeHandler}
            />
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
