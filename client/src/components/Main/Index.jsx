import React from 'react';
import Carousel from '../Carousel';

export default function Index(props) {
  const { carouselBooks } = props;
  // Object of arrays (key is category)

  const parsedList =
    //Map out Object keys (Title of carousel)
    carouselBooks &&
    Object.keys(carouselBooks).map((category) => (
      // Build component w. book list key value
      <Carousel
        carouselTitle={carouselBooks[category]['catTitle']}
        carouselBooks={carouselBooks[category]['books']}
        setUserBooks={props.setUserBooks}
        newBook={props.newBook}
        show={props.show}
        setShow={props.setShow}
        clubs={props.clubs}
        setClubBook={props.setClubBook}
      />
    ));
  return (
    <div>
      <h1>Welcome to ...</h1>
      {parsedList}
    </div>
  );
}
