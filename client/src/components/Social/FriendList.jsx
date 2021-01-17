import React from 'react';
import FriendListItem from './FriendListItem';

export default function FriendList(props) {
  props = {
    friends: ['Joe', 'Sara', 'Beth'],
  };
  const { friends } = props;

  const parsedList =
    friends && friends.map((friend) => <FriendListItem friend={friend} />);

  return (
    <section>
      <h1>FriendList</h1>
      <ul>{parsedList}</ul>
    </section>
  );
}
