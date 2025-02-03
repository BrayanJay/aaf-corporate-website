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
import LoanCalculator from '../components/LoanCalculator'


const LandingPage = () => {
  return (
    <>
        {/*Meta Tags for SEO Optimization*/}
        <Helmet>

        
        <meta name="description" content="Offering lending, deposits, and more. Get reliable finance solutions tailored for customers in Sri Lanka." />
        <meta name="keywords" content="Finance Solutions Sri Lanka"></meta>
        <meta property="og:description" content="Leading finance company in Sri Lanka." />
        <meta property="og:image" content="/src/media/logo.webp" />
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
        <div id='loan_calculator'><LoanCalculator/></div>
    </>
  )
}

export default LandingPage
