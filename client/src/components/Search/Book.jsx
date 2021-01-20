import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MoreInfo from "./MoreInfo";

const Book = ({ book, ...props }) => {
  console.log("BOOK PROPS", props);
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    cover_edition_key,
  } = book;
  const { currBook, setCurrBook } = props;
  const [modalShow, setModalShow] = useState(false);

  const clickShelf = (e) => {
    e.preventDefault();
    const bookKey = key.split("/works/")[1];
    props.setUserBooks((prevState) => [
      ...prevState,
      { id: cover_edition_key, title: title, author: author_name },
    ]);
  };

  const clickWishlist = (e) => {
    e.preventDefault();
    props.setWishlist((prevState) => [
      ...prevState,
      { id: cover_edition_key, title: title, author: author_name },
    ]);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {/* {author_name.join(', ')} */}
          {author_name}
        </Card.Subtitle>

        <Button onClick={clickShelf}>Add to shelf</Button>
        <Button onClick={clickWishlist}>Add to wishlist</Button>

        <Button
          variant="primary"
          onClick={() => {
            setCurrBook({ id: book.text[0] });
            setModalShow(true);
          }}
        >
          More Info
        </Button>

        <MoreInfo
          book={book}
          key={book.key}
          description={currBook.description}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
};

export default Book;
