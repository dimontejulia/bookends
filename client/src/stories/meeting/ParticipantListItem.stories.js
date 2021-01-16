import React from 'react';
import ParticipantListItem from '../../components/Meeting/ParticipantListItem';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: ParticipantListItem,
};

const Template = () => <ParticipantListItem />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};