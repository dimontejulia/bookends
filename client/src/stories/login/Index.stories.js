import React from 'react';
import Login from '../../components/Login/Index'

// This default export determines where your story goes in the story list
export default {
  title: 'Login/Login page',
  component: Login,
};

const Template = () => <Login />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};