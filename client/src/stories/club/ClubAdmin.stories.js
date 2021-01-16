import React from 'react';
import ClubAdmin from '../../components/Club/ClubAdmin'

// This default export determines where your story goes in the story list
export default {
  title: 'Clubs/ClubAdmin',
  component: ClubAdmin,
};

const Template = () => <ClubAdmin />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};