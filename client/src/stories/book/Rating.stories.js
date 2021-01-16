import React from 'react';
import Rating from '../../components/Book/Rating';

// This default export determines where your story goes in the story list
export default {
  title: 'Book/Rating',
  component: Rating,
};

const Template = () => <Rating />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};