import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export default function Rating(props) {
  const numberToStarRating = (rating) => {
    const emptyStars = 5 - rating;
    let starRating = [];
    //Add Solid Stars to Array
    for (let i = 0; i < rating; i++) {
      starRating.push(<FontAwesomeIcon icon={faStarSolid} />);
    }
    //Add Empty Starts to Array (totaling 5)
    for (let i = 0; i < emptyStars; i++) {
      starRating.push(<FontAwesomeIcon icon={faStarRegular} />);
    }
    //Map to Render Array
    return starRating;
  };

  return <span>{numberToStarRating(props.userRating)}</span>;
}
