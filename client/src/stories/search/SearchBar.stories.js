import React from 'react';
import SearchBar from '../../components/Search/SearchBar';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: SearchBar,
};

const Template = () => <SearchBar />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};