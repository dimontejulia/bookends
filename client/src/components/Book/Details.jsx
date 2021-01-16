import React from 'react';
import classnames from 'classnames';

import Rating from './Rating';

export default function Details() {
  const props = {
    cover: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en",
    title: "Atomic Habits",
    author: "James Clear",
    published: "October 16, 2018",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
  };

  return(
    <div>
      <img 
        className="book__cover-img" 
        src={props.cover} 
        alt={props.title}
      />
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <span>{props.published}</span> | <Rating />
      <p>{props.description}</p>
    </div>
  );
};
