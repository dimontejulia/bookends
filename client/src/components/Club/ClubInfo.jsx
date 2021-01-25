import React, { useState, useEffect } from 'react';
import Details from '../Book/Details';
import ClubRegular from './ClubRegular';
import ClubAdmin from './ClubAdmin';
import ClubNews from './ClubNews';
import List from '../List';

export default function ClubInfo(props) {
  const bookDetails = props.currBook;
  const [clubInfo, setClubInfo] = useState(props.currClub);

  console.log('CLUBINFO PROPS', props);
  console.log('CLUBINFO state', clubInfo);

  useEffect(() => {
    console.log('USE EFFECT HIT', props.currClub);
    setClubInfo(props.currClub);
  }, [props.currClub, props.editClub]);
  //getting book history - prop manipulation
  // const numBooks = Object.keys(props.currClub).length - 10;
  // let bookHistory = [];
  // for (var i = 0; i < numBooks; i++) bookHistory[i] = props.currClub[i];

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
        <Details book={bookDetails ? bookDetails : null} />
        <ClubNews clubNews={props.clubNews} postClubNews={props.postClubNews} />
      </section>
      {/* <ClubHistory
        bookHistory={props.currClub.history}
        numBooks={props.currClub.history ? props.currClub.history.length : 0}
      /> */}
    </div>
  );
}
