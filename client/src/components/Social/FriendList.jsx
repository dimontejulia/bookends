import React from 'react';
import FriendListItem from './FriendListItem';

export default function FriendList(props) {
  props = {
    friends: ['Joe', 'Sara', 'Beth'],
  };
  return (
    <section>
      <h1>FriendList</h1>
      <ul>
        <FriendListItem friends={props.friends} />
      </ul>
    </section>
  );
}
