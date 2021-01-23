import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Container } from "react-bootstrap";
// import * as serviceWorker from "./serviceWorker";

import "normalize.css";
import "./fontawesome";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    {/* <Container> */}
    <App />
    {/* </Container> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
