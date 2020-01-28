import React from "react";

function Booklist({ books, selectBook }) {
  return (
    <ul id="booklist">
      {books.map(book => {
        if (book.volumeInfo.authors && book.volumeInfo.imageLinks) {
          return (
            <button
              key={book.id}
              className="title"
              onClick={() => selectBook(book)}
            >
              <img
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title + "cover"}
              ></img>{" "}
              <br />
              {book.volumeInfo.title}, {book.volumeInfo.authors[0]}
            </button>
          );
        }
      })}
    </ul>
  );
}

export default Booklist;
