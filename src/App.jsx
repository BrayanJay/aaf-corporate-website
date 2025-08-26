import { useEffect, useState } from 'react';

//Dependancies and Libraries
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

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
import InvesterRelationsPage from './pages/InvesterRelationsPage';
import CareerPortal from './pages/subpages/careers/CareerPortal';
import Downloads from './pages/Downloads';

//Sub pages
import Contacts from './pages/Contacts';
import PersonalProfile from './pages/PersonalProfile';
import BranchNetwork from './components/BranchNetwork';

import GoldLoanPage from './pages/subpages/products/GoldLoanPage';
import FixedDepositPage from './pages/subpages/products/FixedDepositPage';
import LeasingPage from './pages/subpages/products/LeasingPage';
import MortgagePage from './pages/subpages/products/Mortgage';
import ForeignExchangePage from './pages/subpages/products/ForeignExchange';
import LuckewalletPage from './pages/subpages/products/LuckewalletPage';

import Loader from './components/Loader';
import Promotions from './pages/Promotions';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import Modal from './components/Modal';
import CustomerInformation from './pages/subpages/CustomerInformation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import LuckewalletTutues from './pages/subpages/LuckewalletTutes';

import Login from './components/Leadwave/Login';
import LeadForm from './components/Leadwave/LeadForm';

import NotFound from './pages/NotFound';

function App() {
  const { t } = useTranslation();
  const fdPage = t("fdPage", { returnObjects: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupBannerOpen, setIsPopupBannerOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',  
    });
  }, []); // The empty array ensures the effect runs only once when the component mounts.

  // Fetch popup status from API
  useEffect(() => {
    const fetchPopupStatus = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/data/popup/status`);
        const data = response.data;
        
        if (data.success && data.data.status === 'enabled') {
          // Check if popup has been shown in this session
          const hasPopupBeenShown = sessionStorage.getItem("hasPopupBannerBeenShown");
          
          if (!hasPopupBeenShown) {
            // Add a small delay before showing the popup
            setTimeout(() => {
              setIsPopupBannerOpen(true);
              sessionStorage.setItem("hasPopupBannerBeenShown", "true");
            }, 2000); // Show popup after 3 seconds
          }
        }
      } catch (error) {
        console.error('Error fetching popup status:', error);
      }
    };

    fetchPopupStatus();
  }, []);

  const handleClosePopupBanner = () => {
    setIsPopupBannerOpen(false);
  };

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

    <span key="tiktok" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.tiktok.com/@asia_asset_finance" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="text-black/80 hover:text-black text-2xl lg:text-4xl"/>
        </a>
    </span>,

    <span key="branch-network" className="rounded-md w-10 h-10 flex justify-center items-center cursor-pointer">
    <HashLink smooth to="/branchnetwork">
          <img src={`${import.meta.env.VITE_API_BASE_URL}/media/icons/map_icon.png`}/>
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

      {/* Popup Banner Modal */}
      <Modal
        isOpen={isPopupBannerOpen}
        onClose={handleClosePopupBanner}
        className="max-w-[800px] mx-10"
      >
        <div className="">
          <div className="flex gap-2 items-center">
            <button
              className="text-white/60 hover:text-white/80 bg-rose-800 hover:bg-rose-700 transition-colors duration-300 ease-in-out p-2 ml-auto"
              onClick={handleClosePopupBanner}
            >
              <FontAwesomeIcon icon={['fas', 'times']} className="text-xl"/>
            </button>
          </div>
          <img 
            src={`${import.meta.env.VITE_API_BASE_URL}/media/uploads/popup.webp`} 
            alt="Promotional Banner"
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              console.error('Popup banner image failed to load');
              e.target.style.display = 'none';
            }}
          />
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
          <Route path='/ir' element={<InvesterRelationsPage/>}/>
          <Route path="/profile/bod/:profileId" element={<PersonalProfile type="bod" />} />
          <Route path="/profile/coop/:profileId" element={<PersonalProfile type="coop" />} />
          <Route path='/branchnetwork' element={<BranchNetwork/>}/>

          <Route path="/gold-loan" element={<GoldLoanPage />} />
          <Route path="/fixed-deposit" element={<FixedDepositPage />} />
          <Route path="/leasing" element={<LeasingPage />} />
          <Route path="/mortgage" element={<MortgagePage />} />
          <Route path="/foreign-exchange" element={<ForeignExchangePage />} />
          <Route path="/luckewallet" element={<LuckewalletPage />} />

          <Route path="/careers" element={<CareerPortal />} />
          
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/downloads' element={<Downloads/>}/>
          <Route path='/promotions' element={<Promotions/>}/>
          <Route path='/downloads/customer-information' element={<CustomerInformation/>}/>
          <Route path='/downloads/luckewallet-guidelines' element={<LuckewalletTutues/>}/>
          <Route path='/downloads/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/app-privacy-policy' element={<PrivacyPolicy/>}/>

          <Route path='contacts/complaints' element={<Contacts formType='complaint'/>}/>
          <Route path='/customer-complaints' element={<Contacts formType='complaint'/>}/>

          <Route path='/test/leadWave/login' element={<Login />} />
          <Route path='/test/leadWave/leadForm' element={<LeadForm />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
