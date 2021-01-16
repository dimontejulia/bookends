import React from 'react';
import BookButton from '../../components/BookShelf/BookButton';

// This default export determines where your story goes in the story list
export default {
  title: 'Book Shelf/BookButton',
  component: BookButton,
};

const Template = () => <BookButton />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};