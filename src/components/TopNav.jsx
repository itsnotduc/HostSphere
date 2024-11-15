import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TopNav = ({ toggleTheme }) => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">OVERVIEW</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/support">SUPPORT</Link>
      </div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default TopNav;
