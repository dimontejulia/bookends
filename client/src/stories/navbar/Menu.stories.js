import React from 'react';
import Menu from '../../components/Menu';

// This default export determines where your story goes in the story list
export default {
  title: 'Navbar/Menu',
  component: Menu,
};

const Template = () => <Menu />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};