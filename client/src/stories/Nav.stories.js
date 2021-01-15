import React from 'react';
import Nav from '../components/Nav';

// This default export determines where your story goes in the story list
export default {
  title: 'Navigation',
  component: Nav,
};

const Template = () => <Nav />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};