import React from 'react';
import FriendList from './FriendList';
import ClubList from './ClubList';
import NewsFeed from './NewsFeed';
import NewPostForm from './NewPostForm';
import AddFriend from './AddFriend';

export default function Index(props) {
  console.log('SOCIAL INDEX PROPS ======', props);

  // const friends = props.friends;
  // const friendList = friends.map((friend) => {
  //   return `${friend.firstname} ${friend.lastname}`;
  // });

  const clubs = props.clubs;
  const clubIdList =
    clubs &&
    clubs.map((club) => {
      console.log(club.book_club_id);
      return club.book_club_id;
    });

  const news = props.news;
  const newsList =
    news &&
    news.map((post) => {
      return post;
    });

  return (
    <div>
      <AddFriend addFriend={props.addFriend} />
      <FriendList
        friendList={props.friends}
        deleteFriend={props.deleteFriend}
      />
      <ClubList
        setCurrClub={props.setCurrClub}
        currClub={props.currClub}
        list={clubIdList}
        listName='Clubs'
      />
      <NewPostForm
        userId={props.user.id}
        news={props.news}
        setNews={props.setNews}
      />
      <NewsFeed newsList={newsList} listName='News' />
    </div>
  );
}
