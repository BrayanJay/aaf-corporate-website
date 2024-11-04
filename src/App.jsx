import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProductsAndServicesPage from './pages/ProductsAndServicesPage';
import InvesterRelationsPage from './pages/InvesterRelationsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out-cubic' });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsAndServicesPage />} />
          <Route path="/ir" element={<InvesterRelationsPage />} />
          {/* Add any other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
