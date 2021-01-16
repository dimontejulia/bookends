import React from 'react';
import ParticipantListItem from './ParticipantListItem';

export default function ParticipantList(props) {
  props = {
    participants: ['Joe', 'Sara', 'Beth'],
  };
  return (
    <section>
      <h1>ParticipantList</h1>
      <ul>
        <ParticipantListItem friends={props.participants} />
        <ParticipantListItem />
        <ParticipantListItem />
      </ul>
    </section>
  );
}
