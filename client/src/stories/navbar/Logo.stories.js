import React from 'react';
import Logo from '../../components/Logo';

// This default export determines where your story goes in the story list
export default {
  title: 'Navbar/Logo',
  component: Logo,
};

const Template = () => <Logo />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};