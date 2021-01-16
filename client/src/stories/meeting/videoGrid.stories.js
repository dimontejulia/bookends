import React from 'react';
import VideoGrid from '../../components/Meeting/VideoGrid';

// This default export determines where your story goes in the story list
export default {
  title: 'Meeting/VideoGrid',
  component: VideoGrid,
};

const Template = () => <VideoGrid />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};