import React from 'react';
import ClubNewsForm from './ClubNewsForm';
import ClubNewsFeed from '../Social/NewsFeed';

export default function ClubInfo(props) {
  const { postClubNews, clubNews } = props;

  return (
    <section>
      <ClubNewsForm postClubNews={postClubNews} />
      <ClubNewsFeed newsList={clubNews} listName='Club News:' />
    </section>
  );
}
