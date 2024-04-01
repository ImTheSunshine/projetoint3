import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel/>
      <Search/>
      <Footer />
      </div>

  );  
}

export default App;
