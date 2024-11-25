import React from 'react'
import { useTranslation } from 'react-i18next';
import Carousel from '../components/Carousel';
import CorporateInformation from '../components/CorporateInformation';
import FinancialKeys from '../components/FinancialKeys';
import Documents from '../components/Documents';

const InvesterRelationsPage = () => {
  const { t } = useTranslation();
  const bannerDetails = t("bannerIR", { returnObjects: true });
  return (
    <div className='container mx-auto'>
        <Carousel image={bannerDetails}/>
        <div id='corporate-information' className=' bg-white'>
        <CorporateInformation/>
        </div>
        <div id='financial-keys' className='pt-12 bg-white'>
        <FinancialKeys/>
        </div>
        <Documents/>
    </div>
  )
}

export default InvesterRelationsPage
