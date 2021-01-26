import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Login(props) {
  //Update User state handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //On Click Axios Call to Server to Auth and get UserID + profile
  const handleSubmitClick = (e) => {
    e.preventDefault();
    axios
      .post("/login", props.user)
      .then((res) => {
        console.log("AXIOS USER", props.user);
        const userData = res.data[0];
        //If reseponse good (UserID)
        // update cookie here
        //Update userState
        // Book list friends (Later)
        props.setUser(userData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <form onSubmit={handleSubmitClick} autoComplete="off">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}
