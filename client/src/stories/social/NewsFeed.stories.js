import React from 'react';
import NewsFeed from '../../components/Social/NewsFeed';

// This default export determines where your story goes in the story list
export default {
  title: 'Social/NewsFeed',
  component: NewsFeed,
};

const Template = () => <NewsFeed />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};