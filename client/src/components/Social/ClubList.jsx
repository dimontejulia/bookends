import React from 'react';
import ClubListItem from './ClubListItem';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function ClubList(props) {
  const { listName, list, setCurrClub, setCurrBook, setClubNews } = props;

  const currentClub = (clubId) => {
    Promise.all([
      axios.get(`/api/clubs/${clubId}`),
      axios.get(`/api/clubs/${clubId}/newsfeed`),
      axios.get(`/api/clubs/${clubId}/history`),
      axios.get(`/api/clubs/${clubId}/members`),
    ])
      .then(([clubDetails, news, history, members]) => {
        console.log('MEMBR RTN', members.data);
        //HELPER convert history to array
        function coveryHistoryToArray(historyObj) {
          return historyObj.map((book) => `${book.title} by ${book.author}`);
        }

        //Fetch Club Details
        setCurrClub({
          ...clubDetails.data,
          history: coveryHistoryToArray(history.data),
          members: members.data,
        });
        // //Set Current Book (for details)
        setCurrBook({ id: clubDetails.data.current_book });
        // //Set Club News
        setClubNews(news.data);
      })
      .catch((err) => err);
  };

  const parsedList =
    list &&
    list.map((club) => (
      <Link to={`/clubs/${club.id}`}>
        <Button onClick={() => currentClub(club.id)}>
          {club.book_club_name}
        </Button>
      </Link>
    ));

  return (
    <section>
      <h1>{listName}</h1>
      <ul>{parsedList}</ul>
    </section>
  );
}
