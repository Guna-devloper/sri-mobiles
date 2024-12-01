import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
