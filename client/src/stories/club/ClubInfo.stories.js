import React from 'react';
import ClubInfo from '../../components/Club/ClubInfo'

// This default export determines where your story goes in the story list
export default {
  title: 'Clubs/ClubInfo',
  component: ClubInfo,
};

const Template = () => <ClubInfo />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};