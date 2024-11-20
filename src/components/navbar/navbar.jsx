import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <label htmlFor="toggle-login" className="nav-button">Login</label>
      <button className="nav-button">Register</button>
    </nav>
  );
};

export default Navbar;