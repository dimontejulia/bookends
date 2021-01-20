import React from 'react';
import './Carousel.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Book from './Search/Book';

export default function Carousel(props) {
  const books = props.carouselBooks;
  // newBook (Functions)
  const handleAddToShelf = (input) => {
    props.setUserBooks((prevState) => ({
      ...prevState,
      [input.id]: {
        id: input.id,
        title: input.title,
        author: input.author,
      },
    }));
  };

  const handleClick = (input) => {
    props.newBook(input);
  };

  return (
    <section className='carousel'>
      <h2>{props.carouselTitle}</h2>
      <div className='carousel__covers'>
        {books.map((book) => (
          <div className='carousel__container'>
            <img
              key={book.id}
              className='carousel__book-cover'
              src={`https://covers.openlibrary.org/b/olid/${book.id}-L.jpg`}
              alt={book.title}
            />
            <span className='carousel__info'>
              <h3 className='carousel__book-title'>{book.title}</h3>
              <h5 className='carousel__book-author'>by {book.author}</h5>
              <span className='carousel__book-description'>
                {book.description}
              </span>
              <span className='carousel__book-subjects'>
                <Badge className='carousel__subject-badge' variant='dark'>
                  Non Fiction
                </Badge>
                <Badge className='carousel__subject-badge' variant='dark'>
                  Motivational
                </Badge>
                <Badge className='carousel__subject-badge' variant='dark'>
                  Self-help
                </Badge>
              </span>
              <span className='carousel__buttons'>
                <Button
                  className='carousel__book-button'
                  onClick={() => handleClick(book)}
                >
                  Add to Shelf
                </Button>
                <Button className='carousel__book-button'>Share Book</Button>
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
