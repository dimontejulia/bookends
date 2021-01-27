import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import MoreInfo from "./MoreInfo";
import ChangeClubBook from "../Club/ChangeBook";

const Book = ({ book, addBookToWishlist, ...props }) => {
  const {
    title,
    author_name,
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
    number_of_pages: number_of_pages,
  };

  const { currBook, setCurrBook } = props;
  const [modalShow, setModalShow] = useState(false);

  const clickWishlist = (e) => {
    addBookToWishlist(buttonBook);
  };

  const handleClick = (input) => {
    console.log("book @ button book", book);
    console.log("BUTTON BOOK", buttonBook);
    props.newBook(input, "Shelf");
    // props.setShow({ item: `${input.title} added to shelf.`, status: true });
  };

  return (
    <div>
      <Card className="book-card">
        <Card.Body>
          <Card.Img
            className="book-cover"
            variant="top"
            src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
          />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {author_name}
          </Card.Subtitle>
          <Badge
            className="carousel__subject-badge"
            variant="outline-secondary"
          >
            <Button
              variant="outline-secondary"
              onClick={() => {
                setCurrBook({ id: cover_edition_key });
                setModalShow(true);
              }}
            >
              More Info <i className="fas fa-info-circle"></i>
            </Button>
          </Badge>
          <br></br>
          Add to:
          <div>
            <Button
              variant="outline-primary"
              className="search-card-button"
              onClick={() => handleClick(buttonBook)}
            >
              Shelf
            </Button>
            <Button
              className="search-card-button"
              variant="outline-primary"
              onClick={() => clickWishlist()}
            >
              Wishlist
            </Button>
          </div>
          <ChangeClubBook
            book={buttonBook}
            setClubBook={props.setClubBook}
            clubs={props.clubs}
          />
          <MoreInfo
            book={book}
            key={book.id}
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
