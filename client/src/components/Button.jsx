import React from "react";
import Button from "react-bootstrap/Button";
// Generic Btn
export default function ButtonClick(props) {
  return <Button onClick={props.onClick}>{props.children || "Button"}</Button>;
}
