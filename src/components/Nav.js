import React from 'react';
import { Link } from 'react-router';
import '../styles/nav.css';

const Nav = () => (
  <nav className="nav">
    <Link to="/">
      <h1>{"Zak's Git Repo Search"}</h1>
    </Link>
  </nav>
);

export default Nav;
