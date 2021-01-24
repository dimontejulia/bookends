import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import MoreInfo from "./MoreInfo";
import Confirmation from "../Confirmation";
import ChangeClubBook from "../Club/ChangeBook";

const Book = ({ book, ...props }) => {
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    subject,
    cover_edition_key,
    number_of_pages,
    description,
  } = book;

  const buttonBook = {
    id: cover_edition_key,
    title,
    author: author_name,
    description: description,
    first_publish_year: first_publish_year,
    subject: subject,
  };

  const { currBook, setCurrBook } = props;
  const [modalShow, setModalShow] = useState(false);

  const clickWishlist = (e) => {
    e.preventDefault();
    props.setWishlist((prevState) => [
      ...prevState,
      {
        id: cover_edition_key,
        title: title,
        author: author_name,
        first_publish_year: first_publish_year,
        subject: subject,
        number_of_pages: number_of_pages,
      },
    ]);
    const bookKey = key.split("/works/")[1];

    props.setUserBooks((prevState) => ({
      ...prevState,
      [cover_edition_key]: {
        id: cover_edition_key,
        title: title,
        author: author_name,
        first_publish_year: first_publish_year,
        subject: subject,
      },
    }));
    props.setShow({ item: `${title}  added successfully.`, status: true });
  };

  const handleClick = (input) => {
    props.newBook(input);
    props.setShow({ item: `${input.title} added successfully.`, status: true });
  };

  return (
    <div>
      <Card className="book-card">
        <Card.Img
          className="book-cover"
          variant="top"
          src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {author_name}
          </Card.Subtitle>

          <Button onClick={() => handleClick(buttonBook)}>Add to shelf</Button>
          <Button onClick={clickWishlist}>Add to wishlist</Button>
          <ChangeClubBook
            book={buttonBook}
            setClubBook={props.setClubBook}
            clubs={props.clubs}
          />

          <Button
            variant="secondary"
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
    </div>
  );
};

export default Book;
