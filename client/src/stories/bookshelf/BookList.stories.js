import React from 'react';
import BookList from '../../components/BookShelf/BookList';

// This default export determines where your story goes in the story list
export default {
  title: 'Book Shelf/BookList',
  component: BookList,
};

const Template = () => <BookList />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};