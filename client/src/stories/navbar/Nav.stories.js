import React from 'react';
import Navbar from '../../components/Navbarbar';

// This default export determines where your story goes in the story list
export default {
  title: 'Navbarbar/Navbar',
  component: Navbar,
};

const Template = () => <Navbar />;

export const Story = Template.bind({});

Story.args = {
  /* the args you need here will depend on your component */
};