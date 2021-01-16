import React from "react";
import Image from "react-bootstrap/Image";

export default function BookCarosel() {
  const props = {
    cover:
      "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en",
    title: "Atomic Habits",
    author: "James Clear",
    published: "October 16, 2018",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
  };
  return (
    <div className={""}>
      <h3>{props.title}</h3>
      <Image src={props.cover} thumbnail />
    </div>
  );
}
