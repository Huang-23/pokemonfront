import React from 'react';
import '../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ReactGA from 'react-ga';

function Home() {



  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
