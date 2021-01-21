import React from 'react';
import Carousel from '../Carousel';

export default function Index(props) {
  const { carouselBooks } = props;
  console.log('AAAA', props);
  // Object of arrays (key is category)

  //Map out Object keys (Title of carousel)
  // Build component w. book list key value
  const parsedList =
    carouselBooks &&
    Object.keys(carouselBooks).map((category) => (
      <Carousel
        carouselTitle={carouselBooks[category]['catTitle']}
        carouselBooks={carouselBooks[category]['books']}
        setUserBooks={props.setUserBooks}
        newBook={props.newBook}
      />
    ));
  return (
    <div>
      <h1>Welcome to ...</h1>
      {parsedList}
    </div>
  );
}
