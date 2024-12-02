import React from 'react';
import './ShopNow.css';
import { useNavigate } from 'react-router-dom';
import iphone15pro from "../Images/iphone.jpg"
import SamsungGalaxyS23Ultra from "../Images/samsung-ultra.jpg";
import OnePlus11 from "../Images/oneplus.jpg";
import VivoX90Pro from "../Images/vivo.jpg";
import RedmiNote13Pro from "../Images/redmi.jpg";
// import GooglePixel8 from "";
// import MacBookPro16 from "";
// import DellXPS13 from "";
// import HPSpectrex360 from "";
// import iPadPro12 from "";
// import SamsungGalaxyTabS9Ultra from "";
// import AppleWatchSeries from "";
// import SamsungGalaxyWatch6 from "";
// import SonyWH1000XM5  from ""
// import BoseQuietComfort45 from "";
// import JBLLive660NC from "";


function ShopNow() {
  const navigate = useNavigate();

  const handleAddtocart = () => {
    navigate("/addtocart");
  };

  const products = [
    // Smartphones
    { id: 1, name: 'iPhone 15 Pro', price: '₹1,39,900', image:iphone15pro , description: 'A powerful smartphone with an advanced A17 Bionic chip and Dynamic Island display.' },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', price: '₹1,24,999', image: SamsungGalaxyS23Ultra, description: 'Flagship device with cutting-edge camera and S-Pen support.' },
    { id: 3, name: 'OnePlus 11', price: '₹56,999', image: OnePlus11, description: 'Smooth performance and vivid AMOLED display with 120Hz refresh rate.' },
    { id: 4, name: 'Vivo X90 Pro', price: '₹84,999', image:VivoX90Pro , description: 'Premium photography experience with Zeiss optics.' },
    { id: 5, name: 'Redmi Note 13 Pro', price: '₹21,999', image:RedmiNote13Pro , description: 'Budget-friendly phone with a stunning display and long-lasting battery.' },
    { id: 6, name: 'Google Pixel 8', price: '₹74,999', image: '/images/pixel8.jpg', description: 'Pure Android experience with AI-powered features.' },

    // Laptops
    { id: 7, name: 'MacBook Pro 16"', price: '₹2,49,900', image: '/images/macbookpro.jpg', description: 'High-performance laptop with M2 Max chip and stunning Retina display.' },
    { id: 8, name: 'Dell XPS 13', price: '₹1,34,999', image: '/images/dellxps.jpg', description: 'Ultra-thin and powerful laptop with InfinityEdge display.' },
    { id: 9, name: 'HP Spectre x360', price: '₹1,14,999', image: '/images/hpspectre.jpg', description: 'Convertible laptop with a premium design and vivid OLED display.' },

    // Tablets
    { id: 10, name: 'iPad Pro 12.9"', price: '₹1,12,900', image: '/images/ipadpro.jpg', description: 'Powerful tablet with M2 chip and Liquid Retina XDR display.' },
    { id: 11, name: 'Samsung Galaxy Tab S9 Ultra', price: '₹99,999', image: '/images/galaxytab.jpg', description: 'Large tablet with AMOLED display and S-Pen support.' },

    // Smartwatches
    { id: 12, name: 'Apple Watch Series 9', price: '₹41,999', image: '/images/applewatch.jpg', description: 'Smartwatch with advanced health tracking and always-on Retina display.' },
    { id: 13, name: 'Samsung Galaxy Watch 6', price: '₹29,999', image: '/images/galaxywatch.jpg', description: 'Feature-rich smartwatch with long-lasting battery.' },

    // Headphones
    { id: 14, name: 'Sony WH-1000XM5', price: '₹29,990', image: '/images/sonyheadphones.jpg', description: 'Noise-canceling headphones with superior sound quality.' },
    { id: 15, name: 'Bose QuietComfort 45', price: '₹32,999', image: '/images/boseqc45.jpg', description: 'Comfortable headphones with excellent active noise cancellation.' },
    { id: 16, name: 'JBL Live 660NC', price: '₹14,999', image: '/images/jbl660.jpg', description: 'Over-ear headphones with active noise cancellation and powerful bass.' },
    { id: 17, name: 'Sennheiser Momentum 4', price: '₹34,999', image: '/images/sennheiser.jpg', description: 'Premium wireless headphones with outstanding audio quality.' },
    { id: 18, name: 'Beats Studio 3', price: '₹25,999', image: '/images/beatsstudio3.jpg', description: 'Stylish headphones with noise-canceling and Apple W1 chip.' },
    { id: 19, name: 'Audio-Technica ATH-M50XBT', price: '₹18,499', image: '/images/audiotechnica.jpg', description: 'Wireless headphones with studio-quality sound.' },
    { id: 20, name: 'Skullcandy Crusher Evo', price: '₹12,999', image: '/images/skullcandy.jpg', description: 'Personalized bass experience with long battery life.' },
    { id: 21, name: 'Bowers & Wilkins PX7 S2', price: '₹39,999', image: '/images/bowerswilkins.jpg', description: 'Luxury noise-canceling headphones with excellent clarity.' },
    { id: 22, name: 'Marshall Major IV', price: '₹10,999', image: '/images/marshall.jpg', description: 'Retro-designed headphones with long battery life.' },
    { id: 23, name: 'Plantronics BackBeat Go 810', price: '₹9,999', image: '/images/plantronics.jpg', description: 'Affordable noise-canceling headphones with balanced sound.' },
    { id: 24, name: 'Philips PH805', price: '₹7,499', image: '/images/philipsph805.jpg', description: 'Affordable headphones with active noise cancellation.' },
    { id: 25, name: 'Anker Soundcore Q35', price: '₹8,999', image: '/images/ankerq35.jpg', description: 'Budget-friendly headphones with multipoint connection.' }
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
