import React from "react";
import Card from "react-bootstrap/Card";

export function numBooksAward(numBooks) {
  let medal;
  if (numBooks > 30) {
    medal = "Gold";
  } else if (numBooks > 20) {
    medal = "Silver";
  } else {
    medal = "Bronze";
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{medal} Reader</Card.Title>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + `/images/${medal.toLowerCase()}.png`}
        />
        <Card.Text>Wow. You have {numBooks} books on your shelf!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export function oldBook(currentYear, oldestBook) {
  if (currentYear - oldestBook >= 100) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Old Timer</Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/old_timer.png"}
          />
          <Card.Text>
            You have a book on your shelf from 100 years ago! It was published
            in {oldestBook}, {currentYear - oldestBook} years ago!
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export function newBook(currentYear, newestBook) {
  if (newestBook === currentYear - 1) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Millennial Reader</Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/millennial_reader.png"}
          />
          <Card.Text>
            You've read a book published in the last year. It was published in{" "}
            {newestBook}. Keep on supporting modern day authors!
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
