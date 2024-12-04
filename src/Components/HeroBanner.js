import React from 'react';
import './HeroBanner.css';
import { useNavigate } from 'react-router-dom';

function HeroBanner() {
  const navigate = useNavigate();
  const handleShop = ()=>{
navigate("/shopnow")
  }
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <h2>Discover the Best Deals on Mobile Phones</h2>
        <p>Your one-stop shop for the latest smartphones and accessories.</p>
        <div onClick={handleShop} >Shop Now</div>
      </div>
    </section>
  );
}

export default HeroBanner;
