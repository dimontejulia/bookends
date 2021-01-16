import React from 'react';
import Carosel from '../../components/Main/BookCarosel';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Page/Book Carosel',
  component: Carosel,
};

const Template = () => <Carosel />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};