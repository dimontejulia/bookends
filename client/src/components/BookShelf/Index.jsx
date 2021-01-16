import React from 'react';
import BookList from './BookList';

export default function Index() {
  return (
    <div>
      <h1>Index of bookshelf</h1>
      <p>User books will go here</p>
      <BookList />
    </div>
  );
}
