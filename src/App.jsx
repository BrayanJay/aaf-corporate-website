import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProductsAndServicesPage from './pages/ProductsAndServicesPage';
import InvesterRelations from './pages/InvesterRelations';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []); // The empty array ensures the effect runs only once when the component mounts.

  return (
    <>
      <ProductsAndServicesPage/>
    </>
  );
}

export default App;
