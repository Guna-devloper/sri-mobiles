import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
