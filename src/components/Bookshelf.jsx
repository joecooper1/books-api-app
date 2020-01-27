import React from "react";
import Booklist from "./Booklist";
import Bookchart from "./Chart";

class Bookshelf extends React.Component {
  state = {
    books: []
  };

  render() {
    return (
      <main>
        <Booklist books={this.state.books} />
        <Bookchart books={this.state.books} id="bookchart" />
      </main>
    );
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=george_r_r_martin+inauthor&maxResults=10"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ books: myJson.items });
      });
  }
}

export default Bookshelf;
