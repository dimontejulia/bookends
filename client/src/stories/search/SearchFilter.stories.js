import React from 'react';
import SearchFilter from '../../components/Search/SearchFilter';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Index',
  component: SearchFilter,
};

const Template = () => <SearchFilter />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};