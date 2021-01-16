import React from 'react';
import BookListItem from '../../components/BookShelf/BookListItem';

// This default export determines where your story goes in the story list
export default {
  title: 'Book Shelf/BookListItem',
  component: BookListItem,
};

const Template = () => <BookListItem />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};