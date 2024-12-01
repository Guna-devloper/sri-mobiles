import React from 'react';
import './ShopNow.css';
import { useNavigate } from 'react-router-dom';

function ShopNow() {
    const navigate = useNavigate();
    const handleAddtocart = () =>{
navigate("/addtocart")
    }
  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: '₹1,39,900', image: '/images/iphone15.jpg', description: 'A powerful smartphone with an advanced A17 Bionic chip and Dynamic Island display.' },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', price: '₹1,24,999', image: '/images/s23.jpg', description: 'Flagship device with cutting-edge camera and S-Pen support.' },
    { id: 3, name: 'OnePlus 11', price: '₹56,999', image: '/images/oneplus11.jpg', description: 'Smooth performance and vivid AMOLED display with 120Hz refresh rate.' },
    { id: 4, name: 'Vivo X90 Pro', price: '₹84,999', image: '/images/vivox90.jpg', description: 'Premium photography experience with Zeiss optics.' },
    { id: 5, name: 'Redmi Note 13 Pro', price: '₹21,999', image: '/images/redminote13.jpg', description: 'Budget-friendly phone with a stunning display and long-lasting battery.' },
    { id: 6, name: 'Google Pixel 8', price: '₹74,999', image: '/images/pixel8.jpg', description: 'Pure Android experience with AI-powered features.' },
  ];

  return (
    <section className="shop-now">
      <h2>Shop Now</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="buy-now" onClick={handleAddtocart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopNow;
