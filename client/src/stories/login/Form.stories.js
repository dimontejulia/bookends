import React from 'react';
import Form from '../../components/Login/Form'

// This default export determines where your story goes in the story list
export default {
  title: 'Login/Form',
  component: Form,
};

const Template = () => <Form />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};