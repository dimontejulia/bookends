import React from "react";
import Card from "react-bootstrap/Card";

export default function NewsFeedItem(props) {
  const date = props.item.timestamp;
  return (
    <Card className="newsfeed-post">
      <Card.Header>
        <h4>{props.item.title}</h4>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <blockquote className="blockquote mb-0">
          <p> {props.item.body} </p>
          <footer className="blockquote-footer">
            Posted by: {`${props.item.firstname} ${props.item.lastname}`}
          </footer>
        </blockquote>
      </Card.Body>
      <Card.Footer className="text-muted post-footer">{date}</Card.Footer>
    </Card>
  );
}
