import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import {BrowserRoute,Routes,Route, BrowserRouter} from "react-router-dom"
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';
import ShopNow from './Components/ShopNow';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
      <div className="App">
        <Header />
        <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <FeaturedProducts />
              </>
            }
          />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
