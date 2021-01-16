import React from 'react';
import BookDetails from '../../components/Book/Index';

// This default export determines where your story goes in the story list
export default {
  title: 'Book/Index',
  component: BookDetails,
};

const Template = () => <BookDetails />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};