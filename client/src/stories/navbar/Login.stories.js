import React from "react";
import Form from "../../components/Login";

// This default export determines where your story goes in the story list
export default {
  title: "Navbar/Login",
  component: Login,
};

const Template = () => <Login />;

export const Base = Template.bind({});

Base.args = {
  /* the args you need here will depend on your component */
};
