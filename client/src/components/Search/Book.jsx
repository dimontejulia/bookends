import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import MoreInfo from "./MoreInfo";
import Confirmation from "../Confirmation";

const Book = ({ book, ...props }) => {
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    cover_edition_key,
    number_of_pages,
  } = book;
  const buttonBook = {
    id: cover_edition_key,
    title,
    author: author_name,
    description: book.description,
    first_publish_year: first_publish_year,
  };

  const { currBook, setCurrBook } = props;
  const [modalShow, setModalShow] = useState(false);

  const clickWishlist = (e) => {
    e.preventDefault();
    props.setWishlist((prevState) => [
      ...prevState,
      { id: cover_edition_key, title: title, author: author_name },
    ]);
    const bookKey = key.split("/works/")[1];
    props.setUserBooks((prevState) => ({
      ...prevState,
      [cover_edition_key]: {
        id: cover_edition_key,
        title: title,
        author: author_name,
      },
    }));
    props.setShow({ item: `${title}  added successfully.`, status: true });
  };

  const handleClick = (input) => {
    props.newBook(input);
    props.setShow({ item: `${input.title} added successfully.`, status: true });
  };

  const handleClubClick = (clubId, bookDetails) => {
    clubId = clubId.replace("club-", "");
    //Get club ID from the click event?
    console.log("click event>>>>>>>", clubId, bookDetails);
    props.setClubBook(clubId, bookDetails);
  };

  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Add to Club
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                id="clubId-1"
                onClick={(event) =>
                  handleClubClick(event.target.id, buttonBook)
                }
              >
                club name 1
              </Dropdown.Item>
              <Dropdown.Item id="clubId-2" onClick={() => handleClubClick()}>
                club name 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
    </div>
  );
};

export default Book;
