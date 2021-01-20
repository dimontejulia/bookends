import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export default function Rating(props) {
  const { userRating, setUserBookData, currBookID } = props;

  const handleInput = (event) => {
    let newRating = event.target.id;
    newRating = newRating.slice(-1);
    setUserBookData((prev) => ({
      ...prev,
      [currBookID]: { ...prev[currBookID], rating: newRating },
    }));
  };
  //Onclick of start retun array posn  (Position in span)
  const returnPosnInSpan = () => {
    //Parent Span
    const span = document.querySelector('#rating');
    console.log('************', span);
  };

  const numberToStarRating = (rating) => {
    let count = 0;
    if (!rating) {
      rating = 0;
    }
    console.log('RATING', rating);
    const emptyStars = 5 - rating;
    let starRating = [];
    //Add Solid Stars to Array
    for (let i = 0; i < rating; i++) {
      count++;
      starRating.push(
        <FontAwesomeIcon
          icon={faStarSolid}
          value={`star-${count}`}
          onClick={handleInput}
        />
      );
    }
    //Add Empty Starts to Array (totaling 5)
    for (let i = 0; i < emptyStars; i++) {
      count++;
      starRating.push(
        <FontAwesomeIcon
          icon={faStarRegular}
          id={`star-${count}`}
          onClick={handleInput}
        />
      );
    }
    //Map to Render Array
    return starRating;
  };

  return (
    <span className='star_rating' id='rating'>
      {numberToStarRating(userRating)}
    </span>
  );
}
