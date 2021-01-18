import React, { useState } from "react";
import * as client from "./OpenLibraryClient.jsx";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MoreInfo from "./MoreInfo";

const Book = ({ book, ...props }) => {
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    cover_edition_key,
  } = book;

  const [modalShow, setModalShow] = useState(false);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const bookKey = key.split("/works/")[1];
    props.setUserBooks((prevState) => [...prevState, bookKey]);
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
          {author_name.join(", ")}
        </Card.Subtitle>

        <Button onClick={handleSubmitClick}>Add to shelf</Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          More Info
        </Button>

        <MoreInfo
          book={book}
          key={book.key}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
};

export default Book;
