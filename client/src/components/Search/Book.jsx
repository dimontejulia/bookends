import React from "react";

import Card from "react-bootstrap/Card";

const Book = ({ book }) => {
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    cover_edition_key,
  } = book;

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
        <Card.Text>First published: {first_publish_year}</Card.Text>
        <Card.Link href={`https://openlibrary.org${key}`}>
          Show on Open Library
        </Card.Link>
        <Card.Link
          href={`https://www.goodreads.com/book/show/${id_goodreads[0]}`}
        >
          Show on Goodreads
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Book;
