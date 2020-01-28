import React from "react";

const Description = ({ book, addToBasket }) => {
  if (book && book.volumeInfo.description)
    return (
      <div id="description">
        <p>{book.volumeInfo.description.slice(0, 500) + "..."}</p>
        <button onClick={() => addToBasket(book)}>
          <img
            id="shopBasket"
            src="http://www.clker.com/cliparts/V/o/l/z/d/6/shopping-cart-md.png"
            alt="add to basket"
          ></img>
        </button>
      </div>
    );
  else return <p></p>;
};

export default Description;
