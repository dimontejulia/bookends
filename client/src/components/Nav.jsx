import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <h1>NavBar | Title| Buttons?</h1>
      <Link to='/'>Home</Link>
      <Link to='/shelf'>My Shelf</Link>
    </div>
  );
}
