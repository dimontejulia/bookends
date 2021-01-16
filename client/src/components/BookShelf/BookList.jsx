import React from 'react';
import AddBookButton from './AddBookButton';
import BookListItem from './BookListItem';

export default function BookList() {
  const props = [
    {
      id: 1,
      cover:
        'https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en',
      title: 'Atomic Habits',
      author: 'James Clear',
      published: 'October 16, 2018',
      description:
        "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    },
    {
      id: 2,
      cover:
        'https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en',
      title: 'Atomic Habits',
      author: 'James Clear',
      published: 'October 16, 2018',
      description:
        "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    },
    {
      id: 3,
      cover:
        'https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en',
      title: 'Atomic Habits',
      author: 'James Clear',
      published: 'October 16, 2018',
      description:
        "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    },
  ];

  const testBook = {
    id: 1,
    cover:
      'https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en',
    title: 'Atomic Habits',
    author: 'James Clear',
    published: 'October 16, 2018',
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
  };

  return (
    <section>
      <h1>BookList</h1>
      <br />
      <AddBookButton />
      <BookListItem book={testBook} />
      <BookListItem />
      <BookListItem />
      {/* {parseBooks(props)} */}
    </section>
  );
}
