import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProductsAndServicesPage from './pages/ProductsAndServicesPage';
import ScrollToTop from './components/ScrollToTop';
import InvesterRelationsPage from './pages/InvesterRelationsPage';
import PersonalProfile from './pages/PersonalProfile';
import ProductInfo from './pages/ProductInfo';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { Header } from './components/Header';


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
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/products' element={<ProductsAndServicesPage/>}/>
          <Route path='/ir' element={<InvesterRelationsPage/>}/>
          <Route path='/profile' element={<PersonalProfile/>}/>
          <Route path='/product-info' element={<ProductInfo/>}/>
          <Route path='/contacts' element={<Contacts/>}/>


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
