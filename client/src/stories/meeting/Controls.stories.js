import React from 'react';
import Controls from '../../components/Meeting/Controls';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: Controls,
};

const Template = () => <Controls />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};