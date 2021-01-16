import React from 'react';
import Nav from '../../components/Nav';

// This default export determines where your story goes in the story list
export default {
  title: 'Navbar/Nav',
  component: Nav,
};

const Template = () => <Nav />;

export const Story = Template.bind({});

Story.args = {
  /* the args you need here will depend on your component */
};