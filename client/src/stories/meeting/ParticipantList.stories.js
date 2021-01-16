import React from 'react';
import ParticipantList from '../../components/Meeting/ParticipantList';

// This default export determines where your story goes in the story list
export default {
  title: 'Meeting/ParticipantList',
  component: ParticipantList,
};

const Template = () => <ParticipantList />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};