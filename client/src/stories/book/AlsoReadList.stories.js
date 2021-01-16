import React from 'react';
import AlsoReadList from '../../components/Book/AlsoReadList';

// This default export determines where your story goes in the story list
export default {
  title: 'Book/AlsoReadList (Friends)',
  component: AlsoReadList,
};

const Template = () => <AlsoReadList />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};