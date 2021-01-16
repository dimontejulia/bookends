import React from 'react';
import Controls from './Controls';
import ParticipantList from './ParticipantList';
import VideoGrid from './VideoGrid';

export default function Index(props) {
  let p1 = 'joe';
  return (
    <section>
      <VideoGrid />
      <div>
        <Controls />
      </div>
      <ParticipantList />
    </section>
  );
}
