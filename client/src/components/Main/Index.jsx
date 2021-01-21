import React from 'react';
import SearchIndex from '../Search/SearchIndex.jsx';
import Carousel from '../Carousel';

export default function Index(props) {
  return (
    <div>
      <h1>MainPage</h1>
      <Carousel
        carouselTitle={props.carouselTitle}
        setUserBooks={props.setUserBooks}
        carouselBooks={props.carouselBooks}
        newBook={props.newBook}
      />
      {/* <h3>Latest Books...</h3>
      <BookCarosel /> */}
    </div>
  );
}
