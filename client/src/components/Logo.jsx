import React from "react";
//<img src={process.env.PUBLIC_URL + "/yourPathHere.jpg"} />;
export default function Logo() {
  return (
    <img
      style={{ width: "40%" }}
      src={process.env.PUBLIC_URL + "/images/BookEnds.png"}
    />
  );
}
