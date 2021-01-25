import React, { useState, useEffect } from 'react';
import FriendList from './FriendList';
import ClubList from './ClubList';
import NewsFeed from './NewsFeed';
import NewPostForm from './NewPostForm';
import AddFriendForm from './AddFriend';
import JoinClubForm from './JoinClubForm';
import AddClub from './AddClub';
import Wave from '../Wave';

import '../Social.scss';

export default function Index(props) {
  const { clubs, news, friends, currClub } = props.state;
  const [clubsState, setClubState] = useState(clubs);
  console.log('SOCIAL INDEX PROPS ======', props);
  useEffect(() => {
    console.log('FOCUS', clubs, clubsState);
    setClubState(clubList);
  }, [clubs]);

  const clubList =
    clubs &&
    Object.values(clubs).map((club) => {
      return club;
    });

  const newsList =
    news &&
    news.map((post) => {
      return post;
    });

  return (
    <section>
      <Wave />
      <div className='container'>
        <h1 className='page-title'>Social</h1>
      </div>
      <div className='container'>
        <div className='sidebar'>
          {/* <h2>Connect with Fellow Readers!</h2> */}
          <FriendList friendList={friends} deleteFriend={props.deleteFriend} />
          <AddFriendForm className='search-bar' addFriend={props.addFriend} />
          <br></br>
          {clubsState.length ? (
            <ClubList
              // state={props.state}
              setCurrClub={props.setCurrClub}
              currClub={currClub}
              setCurrBook={props.setCurrBook}
              list={clubsState}
              listName={'Clubs'}
              setClubNews={props.setClubNews}
            />
          ) : (
            'No Clubs Listed'
          )}
          <JoinClubForm joinClub={props.joinClub} />
          <br></br>
          <AddClub className='search-bar' addClub={props.addClub} />
        </div>
        <div className='main-content social__main-content'>
          {/* <h1>Book Talk</h1> */}
          <NewPostForm user={props.user} setNews={props.setNews} />
          <NewsFeed newsList={newsList} />
        </div>
      </div>
    </section>
  );
}
