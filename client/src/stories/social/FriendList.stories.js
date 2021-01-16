import React from 'react';
import FriendList from '../../components/Social/FriendList';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: FriendList,
};

const Template = () => <FriendList />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};