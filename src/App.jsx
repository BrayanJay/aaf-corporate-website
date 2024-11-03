import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProductsAndServicesPage from './pages/ProductsAndServicesPage';
import ScrollToTop from './components/ScrollToTop';
import InvesterRelationsPage from './pages/InvesterRelationsPage';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []); // The empty array ensures the effect runs only once when the component mounts.

  return (
    <Router>
      <div className=''> 
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/products' element={<ProductsAndServicesPage/>}/>
          <Route path='/ir' element={<InvesterRelationsPage/>}/>
        </Routes>
        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;
