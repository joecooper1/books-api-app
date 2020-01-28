import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <form id="searchbar" onSubmit={this.handleSubmit}>
        <label>
          Search
          <input onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.searchBooks(this.state.searchTerm);
  };
}

export default SearchBar;
