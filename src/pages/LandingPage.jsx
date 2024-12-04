import React from 'react'
import HeroBanner from '../components/HeroBanner'
import LandingPgCards from '../components/LandingPgCards'
import WhyChooseUs from '../components/WhyChooseUs'
import Luckewallet from '../components/Luckewallet'
import ProductsOverview from '../components/ProductsOverview'
//import AllTestimonials from '../components/AllTestimonials'
import BranchDetails from '../components/BranchDetails'
//import TrustedPartners from '../components/TrustedPartners'
import InquiriesForm from '../components/InquiriesForm'
import SideImg from '../media/lwallet.webp'


const LandingPage = () => {
  return (
    <>
        <HeroBanner/>
        <LandingPgCards/>
        <WhyChooseUs/>
        <Luckewallet MobilePic={SideImg}/>
        <ProductsOverview/>
        {/*<AllTestimonials/>*/}
        <BranchDetails/>
        {/*<TrustedPartners/>*/}
        <InquiriesForm/>
    </>
  )
}

export default LandingPage
