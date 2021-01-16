import React from 'react';
import mainPage from '../../components/Main/Index';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: mainPage,
};

const Template = () => <mainPage />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};