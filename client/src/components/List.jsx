import React from "react";
import ListItem from "./ListItem";
import ListGroup from "react-bootstrap/ListGroup";

export default function List(props) {
  const { listName, list } = props;

  const parsedList =
    list &&
    list.map((listItem) => <ListGroup.Item> {listItem} </ListGroup.Item>);
  return (
    <section>
      <h3>{listName}</h3>
      <ListGroup variant="flush">{parsedList}</ListGroup>
      {/* 
      <ul>{parsedList}</ul> */}
    </section>
  );
}
