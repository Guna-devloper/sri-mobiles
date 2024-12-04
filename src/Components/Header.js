import React from 'react';
import './Header.css';
import {useNavigate} from 'react-router-dom';
import HeroBanner from './HeroBanner';
import FeaturedProducts from './FeaturedProducts';

const  Header = () =>{
  console.log("app.js===============>>>>>>")
  const navigate = useNavigate();
  const handleHome = () =>{
navigate("/")
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
    <>
    <header className="header">
      <h1 className="logo">Sri Mobiles</h1>
      <nav className="navbar">
      <a>  <div onClick={handleHome}>Home</div></a>
        <div  onClick={handleShopNow}>Products</div>
        <div  onClick={handleAbout}>About Us</div>
        <div onClick={handleContact}>Contact</div>
      </nav>
    </header>
     <HeroBanner />
     <FeaturedProducts />
     </>
  );
}

export default Header;
