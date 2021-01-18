import React from 'react';
import classnames from 'classnames';
import Button from '../Button';
import Details from '../Book/Details';
import ClubRegular from './ClubRegular';
import ClubAdmin from './ClubAdmin';

export default function ClubInfo() {
  const props = {
    isAdmin: true,
    name: "John's Club",
    avatar: "https://image.flaticon.com/icons/png/512/69/69589.png",
    description: "Basic book club description goes here",
    currentBook: {
      cover: "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en",
      title: "Atomic Habits",
      author: "James Clear",
      published: "October 16, 2018",
      description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
    }
  };

  return(
    <div>
      <section className="book-club__header">
        <img 
          className="book__cover-img" 
          src={props.avatar} 
          alt={props.name}
          width="20%"
        />
        <br/>
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
        {!props.isAdmin ? <ClubRegular /> : <ClubAdmin />}
      </section>
      <section className="book-club__content">
        <h3>Current Book</h3>
        <Details />
      </section>
    </div>
  );
}
