import React from "react";
import Button from "react-bootstrap/Button";

export default function Form(props) {
  return (
    <main>
      <h1>Login Form</h1>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}
