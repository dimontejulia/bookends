import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function List(props) {
  const { listName, list } = props;

  const parsedList =
    list &&
    list.map((listItem) => (
      <ListGroup.Item key={listItem}> {listItem} </ListGroup.Item>
    ));
  return (
    <section>
      <h3 className="list__title">{listName}</h3>
      <ListGroup variant="flush">{parsedList}</ListGroup>
      {/* 
      <ul>{parsedList}</ul> */}
    </section>
  );
}
