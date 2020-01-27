import React from "react";

function Booklist({ books }) {
  return (
    <ul>
      {books.map(book => {
        console.log(book.volumeInfo);
        if (book.volumeInfo.authors) {
          return (
            <button key={book.id}>
              {book.volumeInfo.title}, {book.volumeInfo.authors[0]}
            </button>
          );
        }
      })}
    </ul>
  );
}

export default Booklist;
