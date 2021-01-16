import React from 'react';
import AddBookButton from '../../components/BookShelf/AddBookButton';

// This default export determines where your story goes in the story list
export default {
  title: 'Book Shelf/AddBookButton',
  component: AddBookButton,
};

const Template = () => <AddBookButton />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};