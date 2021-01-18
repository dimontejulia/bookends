import React from 'react';
import './Carousel.scss';

export default function Carousel() {
  
  const props = {
    title: "Trending Now",
    books: [
      {
        name: "Atomic Habits",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        name: "Harry Potter",
        cover_path: "https://dynamic.indigoimages.ca/books/1408855658.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      }
    ]
  };

  return(
    <section className='carousel'>
      <h2>{props.title}</h2>
      <div className="carousel__covers">
        {props.books.map((book) => (
          <img
            className="carousel__cover"
            src={`${book.cover_path}`}
            alt={book.name}
          />
        ))}
      </div>
    </section>
  );
};
