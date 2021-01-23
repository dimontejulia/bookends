import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../Shelf.scss";

export default function BookListItem(props) {
  const { title, author, bookStatus, bookID, setCurrBook } = props;

  return (
    <Card className="book-card">
      <Link to={`/book/${bookID}`} onClick={() => setCurrBook({ id: bookID })}>
        <Card.Img
          variant="top"
          src={`http://covers.openlibrary.org/b/olid/${bookID}-M.jpg`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>By {author}</Card.Text>
          <Badge className="carousel__subject-badge" variant="secondary">
            {bookStatus}
          </Badge>
        </Card.Body>
      </Link>
    </Card>
  );
}
