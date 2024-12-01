import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Sri Mobiles</h1>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/shopnow">Products</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
