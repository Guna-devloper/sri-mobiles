import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-header">
        <h1>About Sri Mobiles</h1>
        <p>Your one-stop destination for the latest mobile phones and accessories!</p>
      </div>
      <div className="about-content">
        <div className="about-info">
          <h2>Our Shop</h2>
          <p>
            At Sri Mobiles, we are committed to offering the latest smartphones and mobile accessories at competitive prices. 
            Our expert team is here to help you find the perfect device that fits your needs and budget.
          </p>
        </div>
        <div className="about-details">
          <h3>Contact Us</h3>
          <ul>
            <li><strong>Address:</strong> Lakshmi Complex, 2/18, Dharapuram Road, Thillai Nagar, Velliangadu, Tiruppur, Tamil Nadu 641604</li>
            <li><strong>Hours:</strong> Open ⋅ Closes 10:30 PM</li>
            <li><strong>Phone:</strong> <a href="tel:+918940818111">089408 18111</a></li>
          </ul>
        </div>
      </div>
      <div className="about-map">
        <iframe
          title="Sri Mobiles Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.906345799799!2d76.94432231435245!3d11.110511692116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac1c0d7587d17%3A0xf0c3a7b7e78b34ed!2sLakshmi%20Complex%2C%20Dharapuram%20Road!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default About;
