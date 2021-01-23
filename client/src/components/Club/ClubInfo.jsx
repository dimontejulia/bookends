import React from 'react';
import classnames from 'classnames';
import Button from '../Button';
import Details from '../Book/Details';
import ClubRegular from './ClubRegular';
import ClubAdmin from './ClubAdmin';
import ClubNews from './ClubNews';

export default function ClubInfo(props) {
  const bookDetails = props.currBook;

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
      <ClubNews
        postClubNews={props.postClubNews}
        clubNews={props.clubNews}
        postClubNews={props.postClubNews}
        clubId={props.currClub.id}
      />
    </div>
  );
}
