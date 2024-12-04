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
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
