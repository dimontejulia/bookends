import React from 'react';
import FriendList from './FriendList';
import NewsFeed from './NewsFeed';

export default function Index(props) {
  return (
    <div>
      <FriendList />
      <NewsFeed />
    </div>
  );
}
