import React from 'react';
import Details from '../Book/Details';
import ClubRegular from './ClubRegular';
import ClubAdmin from './ClubAdmin';
import ClubNews from './ClubNews';
import ClubHistory from './ClubHistory';

export default function ClubInfo(props) {
  const bookDetails = props.currBook;

  //getting book history - prop manipulation
  const numBooks = Object.keys(props.currClub).length - 10;
  let bookHistory = [];
  for (var i = 0; i < numBooks; i++) bookHistory[i] = props.currClub[i];

  return (
    <div>
      <section className='book-club__header'>
        <img
          className='book__cover-img'
          src={props.currClub.avatar}
          alt={props.currClub.book_club_name}
          width='20%'
        />
        <br />
        <h1>{props.currClub.book_club_name}</h1>
        <h3>{props.currClub.club_description}</h3>
        <h5>Club ID: {props.currClub.id}</h5>

        {props.user.id === props.admin_id ? (
          <ClubRegular />
        ) : (
          <ClubAdmin
            currClub={props.currClub}
            deleteClub={props.deleteClub}
            editClub={props.editClub}
          />
        )}
      </section>
      <section className='book-club__content'>
        <h3>Current Book:</h3>
        <Details book={bookDetails ? bookDetails : null} />
      </section>
      <ClubHistory bookHistory={bookHistory} numBooks={numBooks} />
      <ClubNews clubNews={props.clubNews} postClubNews={props.postClubNews} />
    </div>
  );
}
