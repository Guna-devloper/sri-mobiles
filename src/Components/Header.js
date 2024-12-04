import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Sri Mobiles</h1>
      <nav className="navbar">
        <Link to="/" >Home</Link>
        <Link to="/shopnow">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
