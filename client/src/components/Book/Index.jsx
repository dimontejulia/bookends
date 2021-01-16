import React from 'react';
import Details from './Details';
import Rating from './Rating';
import UserNotes from './UserNotes';
import AlsoReadList from './AlsoReadList';

export default function Index() {
  return (
    <div>
      <h1>Book Details</h1>
      <Details />
      <Rating />
      <UserNotes />
      <AlsoReadList />
    </div>
  );
}
