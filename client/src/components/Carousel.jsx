import React from 'react';
import './Carousel.scss';

export default function Carousel() {
  
  const props = {
    title: "Trending Now",
    books: [
      {
        id: 1,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 2,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 3,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 4,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 5,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 6,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 7,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 8,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
      {
        id: 9,
        name: "Atomic Habits",
        author: "James Clear",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day...",
        cover_path: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en"
      },
    ]
  };

  return(
    <section className='carousel'>
      <h2>{props.title}</h2>
      <div className="carousel__covers">
        {props.books.map((book) => (
          <div className="carousel__container">
            <div className="carousel__content">
              <img
                key={book.id}
                className="carousel__book-cover"
                src={`${book.cover_path}`}
                alt={book.name}
              />
              <span className="carousel__info">
                <h3 className="carousel__book-title">{book.name}</h3>
                <h5 className="carousel__book-author">by {book.author}</h5>
                <span className="carousel__book-description">{book.description}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
