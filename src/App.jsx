import { useEffect, useState } from 'react';

//Dependancies and Libraries
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import Promotions from './pages/Promotions';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import Modal from './components/Modal';
import Popup from './components/temporary/Popup';
import CustomerInformation from './pages/subpages/CustomerInformation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import LuckewalletTutues from './pages/subpages/LuckewalletTutes';
import TestComponent from './components/TestComponent';
import axios from 'axios';

function App() {
  const { t } = useTranslation();
  const fdPage = t("fdPage", { returnObjects: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',  
    });
  }, []); // The empty array ensures the effect runs only once when the component mounts.

  // Fetch popup state from backend
  useEffect(() => {
    axios.get("http://localhost:3000/data/getPopup")
      .then(response => {
        setIsPopupVisible(response.data.popupEnabled);
      })
      .catch(error => console.error("Error fetching popup state:", error));
  }, []);

  {/*useEffect(() => {
    // Check local storage for modal state
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");

    if (!hasModalBeenShown) {
      setIsModalOpen(true);
      localStorage.setItem("hasModalBeenShown", "true");
    }
  }, []);

  useEffect(() => {
    // Check if the modal has been shown before using localStorage
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");

    if (!hasModalBeenShown) {
      setIsModalOpen(true);
      localStorage.setItem("hasModalBeenShown", "true"); // Store in localStorage
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };*/}



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
  
    /*<span key="youtube" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.youtube.com/@asiaassetfinance5308" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'youtube']} className="text-rose-700 hover:text-rose-900 text-2xl lg:text-4xl"/>
        </a>
    </span>,*/

    <span key="tiktok" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.tiktok.com/@asia_asset_finance" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="text-black/80 hover:text-black text-2xl lg:text-4xl"/>
        </a>
    </span>,

    <span key="branch-network" className="rounded-md w-10 h-10 flex justify-center items-center cursor-pointer">
    <HashLink smooth to="/about/#branches">
          {/*<FontAwesomeIcon icon={['fas', 'location-dot']} className="text-green-500 hover:text-green-600 text-2xl lg:text-4xl"/>*/}
          <img src='../src/media/icons/map_icon.png'/>
          </HashLink>
    </span>,

    <span key="fd-rates">
        <button
        className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        aria-label='Fixed Deposit Rates'
      >
        <FontAwesomeIcon icon={['fas', 'percent']} className="text-amber-400 hover:text-amber-500 text-2xl lg:text-4xl"/>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-[600px] mx-10"
      >
        <div className="">
        <div className="flex gap-2 items-center">
        <a href={fdPage.fdRates} download="AAF_FD_RATES" className="ml-auto justify-end">
              <FontAwesomeIcon icon={['fas', 'download']} className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-2xl"/>
            </a>
            <button
              className="text-white/60 hover:text-white/80 bg-rose-800 hover:bg-rose-700 transition-colors duration-300 ease-in-out p-2"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
            
          </div>
          <img src={fdPage.fdRates} className=''/>
          
        </div>
      </Modal>
    </span>,

    <span key="loan calculator" className="rounded-md w-10 h-10 flex justify-center items-center cursor-pointer">
    <HashLink smooth to="/#loan_calculator">
          <FontAwesomeIcon icon={['fas', 'calculator']} className="text-gray-700 hover:text-gray-800 text-2xl lg:text-4xl"/>
          </HashLink>
    </span>,
  ];
  
  return (
    
    <Router>
      <Loader duration={2000}/>
      
      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />} {/* Conditional Rendering */}

      <div className=''>
      
        <ScrollToTop/>
        <ScrollToTopBtn/>
        <Header/>
        <Navbar/>
        <div className='z-40 fixed bottom-5 left-5'>
        <SocialMediaIcons direction='up'>{socialMediaIcons}</SocialMediaIcons>
        </div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          {/*<Route path='/products' element={<ProductsAndServicesPage/>}/>*/}
          <Route path='/ir' element={<InvesterRelationsPage/>}/>
          <Route path="/profile/:id" element={<PersonalProfile />} />

          <Route path="/gold-loan" element={<GoldLoanPage />} />
          <Route path="/fixed-deposit" element={<FixedDepositPage />} />
          <Route path="/leasing" element={<LeasingPage />} />
          <Route path="/mortgage" element={<MortgagePage />} />
          <Route path="/foreign-exchange" element={<ForeignExchangePage />} />
          <Route path="/luckewallet" element={<LuckewalletPage />} />

          <Route path="/careers" element={<CareerPortal />} />
          <Route path="/careers/job-description/:jobId" element={<JobDescription />} />
          <Route path="/careers/application-form" element={<ApplicationForm />} />
          
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/downloads' element={<Downloads/>}/>
          <Route path='/promotions' element={<Promotions/>}/>
          <Route path='/downloads/customer-information' element={<CustomerInformation/>}/>
          <Route path='/downloads/luckewallet-guidelines' element={<LuckewalletTutues/>}/>
          <Route path='/downloads/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/app-privacy-policy' element={<PrivacyPolicy/>}/> {/*Duplicated route coz the old version support*/}

          <Route path='contacts/complaints' element={<Contacts formType='complaint'/>}/> {/*Duplicated route coz the old version support*/}
          <Route path='/customer-complaints' element={<Contacts formType='complaint'/>}/> {/*Duplicated route coz the KYD document*/}
          
          <Route path='/test' element={<TestComponent/>}/>


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
