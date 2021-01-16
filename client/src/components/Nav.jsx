import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Login from "./Login";

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Logo />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="naveBarLink" to="/">
                Home <span class="sr-only">(current)</span>{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="naveBarLink" to="/shelf">
                {" "}
                My Shelf{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="naveBarLink" to="/social">
                {" "}
                Social{" "}
              </Link>
            </li>
          </ul>
          <span class="navbar-text">
            <Login />
          </span>
        </div>
      </nav>
    </div>
  );
}
