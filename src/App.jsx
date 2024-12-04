import React, { useEffect } from 'react';

//Dependancies and Libraries
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Header } from './components/Header';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import ScrollToTop from './components/ScrollToTop';
import SocialMediaIcons from './components/SocialMediaIcons';

//Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
//import ProductsAndServicesPage from './pages/ProductsAndServicesPage';
import InvesterRelationsPage from './pages/InvesterRelationsPage';
import CareerPortal from './pages/subpages/careers/CareerPortal';
import Downloads from './pages/Downloads';

//Sub pages
import Contacts from './pages/Contacts';
import PersonalProfile from './pages/PersonalProfile';

import GoldLoanPage from './pages/subpages/products/GoldLoanPage';
import FixedDepositPage from './pages/subpages/products/FixedDepositPage';
import LeasingPage from './pages/subpages/products/LeasingPage';
import MortgagePage from './pages/subpages/products/Mortgage';
import ForeignExchangePage from './pages/subpages/products/ForeignExchange';
import LuckewalletPage from './pages/subpages/products/LuckewalletPage';

import JobDescription from './pages/subpages/careers/JobDescription';
import ApplicationForm from './pages/subpages/careers/ApplicationForm';
import Loader from './components/Loader';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',  
    });
  }, []); // The empty array ensures the effect runs only once when the component mounts.

  const socialMediaIcons = [
    <span key="facebook" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
      <a href="https://www.facebook.com/AsiaAssetFinancePLC/" target="_blank" rel="noopener noreferrer" className="">
            <FontAwesomeIcon icon={['fab', 'facebook']} className="text-blue-700 hover:text-blue-900 text-2xl lg:text-4xl"/>
          </a>
    </span>,
  
    <span key="instagram" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.instagram.com/asiaassetfinance.lk/" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="text-pink-600 hover:text-pink-800 text-2xl lg:text-4xl"/>
        </a>
    </span>,
    
    <span key="linkedin" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://lk.linkedin.com/company/asia-asset-finance-plc?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-blue-500 hover:text-blue-700 text-2xl lg:text-4xl"/>
        </a>
    </span>,
  
    <span key="youtube" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.youtube.com/@asiaassetfinance5308" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'youtube']} className="text-rose-700 hover:text-rose-900 text-2xl lg:text-4xl"/>
        </a>
    </span>,

    <span key="tiktok" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.tiktok.com/@asia_asset_finance" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="text-black/80 hover:text-black text-2xl lg:text-4xl"/>
        </a>
    </span>,
  ];
  
  return (
    
    <Router>
      <Loader duration={2000}/>
      <div className=''> 
        <ScrollToTopBtn/>
        <ScrollToTop/>
        <Header/>
        <Navbar/>
        <div className='z-50 fixed bottom-5 left-5'>
        <SocialMediaIcons direction='up'>{socialMediaIcons}</SocialMediaIcons>
        </div>
        <Routes>
          <Route path='/web' element={<LandingPage/>}/>
          <Route path='web/about' element={<AboutPage/>}/>
          {/*<Route path='web/products' element={<ProductsAndServicesPage/>}/>*/}
          <Route path='web/ir' element={<InvesterRelationsPage/>}/>
          <Route path="web/profile/:id" element={<PersonalProfile />} />

          <Route path="web/gold-loan" element={<GoldLoanPage />} />
          <Route path="web/fixed-deposit" element={<FixedDepositPage />} />
          <Route path="web/leasing" element={<LeasingPage />} />
          <Route path="web/mortgage" element={<MortgagePage />} />
          <Route path="web/foreign-exchange" element={<ForeignExchangePage />} />
          <Route path="web/luckewallet" element={<LuckewalletPage />} />

          <Route path="web/careers" element={<CareerPortal />} />
          <Route path="web/careers/job-description/:jobId" element={<JobDescription />} />
          <Route path="web/careers/application-form" element={<ApplicationForm />} />
          
          <Route path='web/contacts' element={<Contacts/>}/>
          <Route path='web/downloads' element={<Downloads/>}/>


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
