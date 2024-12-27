import HeroBanner from '../components/HeroBanner'
import LandingPgCards from '../components/LandingPgCards'
import WhyChooseUs from '../components/WhyChooseUs'
import Luckewallet from '../components/Luckewallet'
import ProductsOverview from '../components/ProductsOverview'
import AllTestimonials from '../components/AllTestimonials'
import BranchDetails from '../components/BranchDetails'
//import TrustedPartners from '../components/TrustedPartners'
import InquiriesForm from '../components/InquiriesForm'
import SideImg from '../media/lwallet.webp'
import { Helmet } from 'react-helmet'


const LandingPage = () => {
  return (
    <>
        {/*Meta Tags for SEO Optimization*/}
        <Helmet>

        
        <meta name="description" content="For over 50 years we at Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold Loans we provide for the most reasonable rates, Leasing, Mortgage Loans, Group Personal Loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies." />
        <meta name="keywords" content="Gold Loan, Fixed Deposits, Lowest Rates, Loans, Mortgage, Leasing, Asia Asset Finance, Asia Asset, Finance Company, Leasing Company, Fixed Deposits Rates, Sri Lanka, "></meta>
        <meta property="og:description" content="Leading finance company in Sri Lanka." />
        <meta property="og:image" content="/src/media/wcu1.webp" />
        <meta property="og:url" content="https://asiaassetfinance.com/" />

        </Helmet>

        <HeroBanner/>
        <LandingPgCards/>
        <WhyChooseUs/>
        <Luckewallet MobilePic={SideImg}/>
        <ProductsOverview/>
        <AllTestimonials/>
        <BranchDetails/>
        {/*<TrustedPartners/>*/}
        <InquiriesForm/>
    </>
  )
}

export default LandingPage
