import { parse } from 'query-string';
import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
  const { listName, list } = props;

  const parsedList =
    list && list.map((listItem) => <ListItem item={listItem} />);
  return (
    <section>
      <h1>{listName}</h1>
      <ul>{parsedList}</ul>
    </section>
  );
}
