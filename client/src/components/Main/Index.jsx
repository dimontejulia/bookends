import React from 'react';
import BookCarosel from './BookCarosel';

export default function Index() {
  return (
    <div>
      <h1>MainPage</h1>
      <h3>Trending</h3>
      <BookCarosel />
      <h3>Latest Books...</h3>
      <BookCarosel />
    </div>
  );
}
