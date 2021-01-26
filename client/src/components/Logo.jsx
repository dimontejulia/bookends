import React from "react";
import classnames from "classnames";
export default function Logo() {
  return (
    // <img
    //   style={{ width: "40%" }}
    //   src={process.env.PUBLIC_URL + "/images/BookEnds.png"}
    // />

    <img
      alt=""
      src="/logo.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
  );
}
