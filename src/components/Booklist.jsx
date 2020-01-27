import React from "react";

function Booklist({ books }) {
  return (
    <ul>
      {books.map(book => {
        console.log(book.volumeInfo);
        return (
          <li key={book.id}>
            {book.volumeInfo.title}, {book.volumeInfo.authors[0] || null}
          </li>
        );
      })}
    </ul>
  );
}

export default Booklist;
