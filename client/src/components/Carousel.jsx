import React from "react";
import ChangeClubBook from "./Club/ChangeBook";
import "./Carousel.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ShareBook from "./ShareBook";

export default function Carousel(props) {
  const books = props.carouselBooks;

  const handleClick = (input) => {
    props.newBook(input);
  };

  let subjects;
  const getSubjects = (bookSubjectsStr) => {
    subjects = bookSubjectsStr.split(",").slice(0, 3);
  };

  return (
    <section className="carousel">
      <h2 className="carousel__category">{props.carouselTitle}</h2>
      <div className="carousel__covers">
        {books.map((book) => (
          <div className="carousel__container">
            <img
              key={book.id}
              className="carousel__book-cover"
              src={`https://covers.openlibrary.org/b/olid/${book.id}-L.jpg`}
              alt={book.title}
            />
            <span className="carousel__info">
              <span className="carousel__book-title-author">
                <h3 className="carousel__book-title">{book.title}</h3>
                <h5 className="carousel__book-author">by {book.author}</h5>
              </span>
              <span className="carousel__book-description">
                {book.description}
              </span>
              <span className="carousel__book-subjects">
                {getSubjects(book.subject)}
                <Badge
                  key={`${book.id}_badge_1`}
                  className="carousel__subject-badge"
                  variant="dark"
                >
                  {subjects[0]}
                </Badge>
                <Badge
                  key={`${book.id}_badge_2`}
                  className="carousel__subject-badge"
                  variant="dark"
                >
                  {subjects[1]}
                </Badge>
                <Badge
                  key={`${book.id}_badge_3`}
                  className="carousel__subject-badge"
                  variant="dark"
                >
                  {subjects[2]}
                </Badge>
              </span>
              <span className="carousel__buttons">
                <span className="carousel__buttons-adding">
                  <Button
                    block
                    key={`${book.id}_add`}
                    className="carousel__book-button"
                    onClick={() => handleClick(book)}
                  >
                    Add to Shelf
                  </Button>
                  <ChangeClubBook
                    key={`${book.id}_change`}
                    className="carousel__book-button"
                    book={book}
                    setClubBook={props.setClubBook}
                    clubs={props.clubs}
                  />
                </span>
                {/* <Button block className="carousel__book-button">
                  Share Book
                </Button> */}
                <ShareBook
                  key={`${book.id}_share`}
                  book={book}
                  user={props.user}
                  setNews={props.setNews}
                  news={props.news}
                />
              </span>
            </span>
          </div>
        ))}
      </div>

      <svg
        className="carousel__line-hr"
        width="180px"
        height="3px"
        viewBox="0 0 180 3"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Line</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        >
          <g
            id="Desktop-HD"
            transform="translate(-633.000000, -604.000000)"
            stroke="#CCCCCC"
            strokeWidth="2"
          >
            <line x1="634.5" y1="605.5" x2="812" y2="606" id="Line"></line>
          </g>
        </g>
      </svg>
    </section>
  );
}
