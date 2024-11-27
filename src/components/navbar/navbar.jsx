// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <label htmlFor="toggle-login" className="nav-button">Login</label>
      <label htmlFor="toggle-register" className="nav-button">Register</label>
    </nav>
  );
};

export default Navbar;