import React from "react";
import Booklist from "./Booklist";
import Bookchart from "./Chart";
import SearchBar from "./SearchBar";
import axios from "axios";

class Bookshelf extends React.Component {
  state = {
    books: [],
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <main id="bookshelf">
        <Booklist books={this.state.books} />
        <Bookchart books={this.state.books} id="bookchart" />
        <SearchBar searchBooks={this.searchBooks} />
      </main>
    );
  }

  searchBooks = searchTerm => {
    this.setState({ isLoading: true }, () => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+inauthor`
        )
        .then(({ data: { items } }) => {
          this.setState({
            books: items,
            isLoading: false
          });
        });
    });
  };

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=george_r_r_martin+inauthor&maxResults=10"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ books: myJson.items, isLoading: false });
      });
  }
}

export default Bookshelf;
