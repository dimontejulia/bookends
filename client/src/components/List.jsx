import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
  props = {
    listname: "Friends",
    item: 'Joe',
  };
  return (
    <section>
      <h1>{props.listname} List</h1>
      <ul>
        <ListItem item={props.item} />
      </ul>
    </section>
  );
}
