import React from "react";
import Card from "react-bootstrap/Card";

export default function NewsFeedItem(props) {
  return (
    <section>
      <Card className="text-center" style={{ width: "60%" }}>
        <Card.Header>{props.item.title}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <blockquote className="blockquote mb-0">
            <p> {props.item.body} </p>
            <footer className="blockquote-footer">
              Posted by: {props.item.id}
            </footer>
          </blockquote>
        </Card.Body>
        <Card.Footer className="text-muted">
          {props.item.timestamp.slice(0, 10)}
        </Card.Footer>
      </Card>
    </section>
  );
}
