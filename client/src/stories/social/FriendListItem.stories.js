import React from 'react';
import FriendListItem from '../../components/Social/FriendListItem'

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: FriendListItem,
};

const Template = () => <FriendListItem />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};