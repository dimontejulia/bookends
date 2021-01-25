import React, { useState, useEffect } from 'react';
import Details from '../Book/Details';
import ClubRegular from './ClubRegular';
import ClubAdmin from './ClubAdmin';
import ClubNews from './ClubNews';
import List from '../List';
import Alert from 'react-bootstrap/Alert';

export default function ClubInfo(props) {
  const { setCurrClub, paramId, currClub, editClub } = props;
  const bookDetails = props.currBook;
  const [clubInfo, setClubInfo] = useState(props.currClub);

  useEffect(() => {
    setCurrClub(paramId);
  }, []);

  useEffect(() => {
    setClubInfo(currClub);
  }, [editClub]);

  const members = props.currClub.members
    ? props.currClub.members.map((member) => Object.values(member))
    : null;

  const bookCount = props.currClub.history ? props.currClub.history.length : 0;

  return (
    <div className='container'>
      <section className='sidebar'>
        <img
          className='club-avatar'
          src={clubInfo ? clubInfo.avatar : null}
          alt={clubInfo ? clubInfo.book_club_name : null}
          width='20%'
        />
        <h1>{clubInfo ? clubInfo.book_club_name : 'null'}</h1>
        <h4>{clubInfo ? clubInfo.club_description : null}</h4>
        <h5>Club ID: {props.currClub.id}</h5>

        {props.user.id === props.admin_id ? (
          <ClubRegular />
        ) : (
          <ClubAdmin
            currClub={props.currClub}
            deleteClub={props.deleteClub}
            editClub={props.editClub}
            setClubInfo={setClubInfo}
          />
        )}
        <br></br>
        <List listName={'Book History'} list={props.currClub.history} />
        <h6 className='text-muted'>{`${bookCount} books read`}</h6>
        <br></br>
        <List listName={'Members'} list={members} />
      </section>
      <section className='main-content'>
        {props.currBook.id !== null ? (
          <Details book={bookDetails ? bookDetails : null} />
        ) : (
          <Alert variant={'info'}>
            No book has been chosen for this club.{' '}
          </Alert>
        )}
        <ClubNews clubNews={props.clubNews} postClubNews={props.postClubNews} />
      </section>
      {/* <ClubHistory
        bookHistory={props.currClub.history}
        numBooks={props.currClub.history ? props.currClub.history.length : 0}
      /> */}
    </div>
  );
}
