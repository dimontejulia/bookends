import React from "react";
import Button from "react-bootstrap/Button";

export default function ClubListItem(props) {
  let f1 = "joe";

  console.log("props from club list item", props);

  return <Button>{props.friend}</Button>;
}
