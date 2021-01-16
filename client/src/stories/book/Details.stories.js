import React from 'react';
import Details from '../../components/Book/Details';

// This default export determines where your story goes in the story list
export default {
  title: 'Book/Details',
  component: Details,
};

const Template = () => <Details />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};