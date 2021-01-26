import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import '../Shelf.scss';

export default function BookListItem(props) {
  const { title, author, bookStatus, bookID, setCurrBook } = props;

  return (
    <Card className='book-card'>
      <Link
        to={`/book/${bookID}`}
        onClick={() => {
          console.log('CLICK', props);
          setCurrBook({ id: bookID, listName: props.listName });
        }}
      >
        <Card.Img
          className='book-cover'
          variant='top'
          src={`http://covers.openlibrary.org/b/olid/${bookID}-M.jpg`}
        />
        <Card.Body>
          <Card.Title className='card__text card__title'>{title}</Card.Title>
          <Card.Text className='card__text card__author'>By {author}</Card.Text>
          <Badge className='carousel__subject-badge' variant='primary'>
            {bookStatus}
          </Badge>
        </Card.Body>
      </Link>
    </Card>
  );
}
