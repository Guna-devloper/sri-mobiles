import React from 'react';
import './Header.css';
import {  useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleHome = () =>{
navigate("/home")
  }
  const handleShopNow = () =>{
navigate("/shopnow")
  }
  const handleAbout = () =>{
navigate("/about")
  }
  const handleContact = () =>{
navigate("/contact")
  }
  return (
    <header className="header">
      <h1 className="logo">Sri Mobiles</h1>
      <nav className="navbar">
        <div to="/" >Home</div>
        <div to="/shopnow">Products</div>
        <div to="/about">About Us</div>
        <div to="/contact">Contact</div>
      </nav>
    </header>
  );
}

export default Header;
