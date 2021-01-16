import React from 'react';
import Button from '../components/Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Generic/Button',
  component: Button,
};

const Template = () => <Button />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};