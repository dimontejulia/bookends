import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


export default function Rating() {
  return(
    <span>
      <FontAwesomeIcon icon={faStarSolid} />
      <FontAwesomeIcon icon={faStarSolid} />
      <FontAwesomeIcon icon={faStarSolid} />
      <FontAwesomeIcon icon={faStarSolid} />
      <FontAwesomeIcon icon={faStarRegular} />
    </span>
  );
}
