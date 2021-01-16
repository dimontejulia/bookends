import React from 'react';
import UserNotes from '../../components/Book/UserNotes';

// This default export determines where your story goes in the story list
export default {
  title: 'Book/UserNotes',
  component: UserNotes,
};

const Template = () => <UserNotes />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};