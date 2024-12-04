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
        <div onClick={handleHome}>Home</div>
        <div  onClick={handleShopNow}>Products</div>
        <div  onClick={handleAbout}>About Us</div>
        <div onClick={handleContact}>Contact</div>
      </nav>
    </header>
  );
}

export default Header;
