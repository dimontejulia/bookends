import React from 'react';
import classnames from 'classnames';
import Button from '../Button';
import Details from '../Book/Details';
import ClubRegular from './ClubRegular';
import ClubAdmin from './ClubAdmin';

export default function ClubInfo(props) {
  const placeholderBook = {
    id: 'ID',
    title: 'Not Dynamic Prop yet',
    author: 'That Author',
    published: '1999',
    description: 'A book',
    subjects: null,
    works: null,
    coverLink: `https://covers.openlibrary.org/b/olid/OL365902M-L.jpg`,
  };
  return (
    <div>
      <section className='book-club__header'>
        <img
          className='book__cover-img'
          src={props.club.avatar}
          alt={props.club.name}
          width='20%'
        />
        <br />
        <h1>{props.club.name}</h1>
        <h3>{props.club.description}</h3>
        {props.clubAdmin ? <ClubRegular /> : <ClubAdmin />}
      </section>
      <section className='book-club__content'>
        <h3>Current Book:</h3>
        <Details book={placeholderBook} />
      </section>
    </div>
  );
}
