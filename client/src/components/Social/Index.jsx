import React from 'react';
import FriendList from '../List';
import NewsFeed from '../List';

export default function Index(props) {
  return (
    <div>
      <FriendList list={props.friends} listName='Friends' />
      <NewsFeed list={props.news} listName='News' />
    </div>
  );
}
