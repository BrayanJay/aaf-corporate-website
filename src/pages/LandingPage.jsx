import React from 'react'
import HeroBanner from '../components/HeroBanner'
import LandingPgCards from '../components/LandingPgCards'
import WhyChooseUs from '../components/WhyChooseUs'
import Luckewallet from '../components/Luckewallet'
import ProductsOverview from '../components/ProductsOverview'
import AllTestimonials from '../components/AllTestimonials'
import BranchDetails from '../components/BranchDetails'
import TrustedPartners from '../components/TrustedPartners'
import InquiriesForm from '../components/InquiriesForm'

const LandingPage = () => {
  return (
    <>
        <HeroBanner/>
        <LandingPgCards/>
        <WhyChooseUs/>
          <Luckewallet/>
          <ProductsOverview/>
          <AllTestimonials/>
          <BranchDetails/>
          <TrustedPartners/>
          <InquiriesForm/>
    </>
  )
}

export default LandingPage
