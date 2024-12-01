import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <h2>Discover the Best Deals on Mobile Phones</h2>
        <p>Your one-stop shop for the latest smartphones and accessories.</p>
        <a href="#products" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
}

export default HeroBanner;
