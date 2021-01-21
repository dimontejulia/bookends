import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function BookListItem(props) {
  const { title, author, bookStatus, bookID, setCurrBook } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/book/${bookID}`} onClick={() => setCurrBook({ id: bookID })}>
        <Card.Img
          variant='top'
          src={`http://covers.openlibrary.org/b/olid/${bookID}-M.jpg`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{author} </Card.Subtitle>
          <br />
          <Card.Subtitle>{bookStatus} </Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>
  );
}
