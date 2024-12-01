import React from 'react';
import './AddToCart.css';
import NotAvailable from "../Assets/notavailable.jpg"
function AddToCart() {
  return (
    <section className="add-to-cart">
      <div className="cart-message">
        <img
          src={NotAvailable} 
          alt="Cart icon"
          className="cart-icon"
          
        />
        <h1>Online Shopping Unavailable</h1>
        <p>
          Online shopping is not available at the moment. Please visit our shop
          and explore a wide range of products.
        </p>
        <div className="shop-address">
          <h3>Visit Us:</h3>
          <p>
            Lakshmi Complex, 2/18, Dharapuram Road, Thillai Nagar, Velliangadu, Tiruppur, Tamil Nadu 641604
          </p>
        </div>
        <a href="/" className="back-home-button">
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default AddToCart;
