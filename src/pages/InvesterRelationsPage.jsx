import React from 'react'
import banner1 from '../assets/bannerimg1.svg';
import Carousel from '../components/Carousel';
import CorporateInformation from '../components/CorporateInformation';
import FinancialKeys from '../components/FinancialKeys';
import Documents from '../components/Documents';

    const image = {
        src: banner1,
        title: "Investor Relations",
        intro: "Empowering Your Financial Future ",
        specialnote: "since 1981",
        description: "“ Empowering People and Transforming Lives “",
    };

const InvesterRelationsPage = () => {
  return (
    <div className='container mx-auto'>
        <Carousel image={image}/>
        <CorporateInformation/>
        <FinancialKeys/>
        <Documents/>
    </div>
  )
}

export default InvesterRelationsPage
