import React from 'react';
import './Products.css';

function Products() {
  const products = [
    { id: 1, name: 'iPhone 15', price: '₹1,39,900' },
    { id: 2, name: 'Samsung Galaxy S23', price: '₹74,999' },
    { id: 3, name: 'OnePlus 11', price: '₹56,999' },
    { id: 4, name: 'Redmi Note 13 Pro', price: '₹21,999' },
  ];

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
