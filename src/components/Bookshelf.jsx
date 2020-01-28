import React from "react";
import Booklist from "./Booklist";
import Bookchart from "./Chart";
import SearchBar from "./SearchBar";
import Description from "./Description";
import axios from "axios";
import Basket from "./Basket";

class Bookshelf extends React.Component {
  state = {
    books: [],
    isLoading: true,
    book: null,
    basket: []
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <main id="bookshelf">
        <SearchBar searchBooks={this.searchBooks} />
        <Basket basket={this.state.basket} />
        <div id="selectionScreen">
          <Booklist books={this.state.books} selectBook={this.selectBook} />
          {/* <Bookchart books={this.state.books} id="bookchart" /> */}
          <Description book={this.state.book} addToBasket={this.addToBasket} />
        </div>
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

  selectBook = book => {
    console.log(book);
    this.setState({ book: book });
  };

  addToBasket = book => {
    if (book) {
      this.setState(currentState => {
        return { basket: currentState.basket + 1 };
      });
    }
  };

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=joe+inauthor&maxResults=10"
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
