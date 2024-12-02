import React from 'react';
import './FeaturedProducts.css';
import { useNavigate } from 'react-router-dom';
import iphone from "../Images/iphone.jpg"
function FeaturedProducts() {
const navigate = useNavigate();
const handleNotavailable  =()=>{
    navigate("/addtocart")
}
  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: '₹1,39,900', image: iphone },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', price: '₹1,24,999', image: '/images/s23.jpg' },
    { id: 3, name: 'OnePlus 11', price: '₹56,999', image: '/images/oneplus11.jpg' },
    { id: 4, name: 'Vivo X90 Pro', price: '₹84,999', image: '/images/vivox90.jpg' },
  ];

  return (
    <section className="featured-products" id="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-now" onClick={handleNotavailable}>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
