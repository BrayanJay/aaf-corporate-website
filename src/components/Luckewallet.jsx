import React from 'react'
import MobilePic from '../assets/lwallet.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Astore from '../assets/appstorelogo.svg'
import Pstore from '../assets/playstorelogo.svg'
import { useTranslation } from "react-i18next";

const Luckewallet = () => {
  const { t } = useTranslation();
  const luckewallet = t("luckewalletLandingPage", { returnObjects: true });

  return (
    <div className='flex flex-col lg:flex-row max-w-auto max-h-auto px-10 lg:px-40'>
      <div className='order-2 md:order-1 lg:basis-1/2 w-full h-full relative gap-2'>

        <div className='relative ' data-aos="fade-up">
            <h1 className='border-l-4 lg:border-l-8 border-blue-500 p-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900'>{luckewallet.title1} <span className='font-bold text-amber-400'>{luckewallet.title2}</span> {luckewallet.title3} </h1>
            <p className='border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 pb-5 text-xs md:text-sm lg:text-lg font-semibold text-stone-500'>{luckewallet.subtitle} <span className='font-medium italic underline hover:cursor-pointer text-blue-900'>{luckewallet.learn_more}</span></p>
        </div>
        <div className='relative p-5' data-aos="fade-up">
            <h1 className='text-sm md:text-lg lg:text-xl font-semibold text-blue-900'> {luckewallet.key_features1} <span className='font-bold text-amber-400'>{luckewallet.key_features2}</span></h1>
            <div className='grid grid-cols-2 grid-flow-row gap-2'>
                
                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'list-check']} className='pt-1 text-blue-700' size='lg'/>
                <div className=''>
                <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature1_title}</h1>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature1_description}</p>
                </div>
                </div>

                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'hand-holding-dollar']} className='pt-1 text-blue-700 border-white' size='lg'/>
                <div className=''>
                <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature2_title}</h1>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature2_description}</p>
                </div>
                </div>

                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'shield-halved']} className='pt-1 text-blue-700 border-white' size='lg'/>
                <div className=''>
                <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature3_title}</h1>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature3_description}</p>
                </div>
                </div>

                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'bell']} className='pt-1 text-blue-700 border-white' size='lg'/>
                <div className=''>
                <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature4_title}</h1>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature4_description}</p>
                </div>
                </div>

            </div>
            <div className='flex gap-5 pt-10'>
                <img className='w-36 hover:cursor-pointer hover:shadow-lg' src={Astore}/>
                <img className='w-36 hover:cursor-pointer hover:shadow-lg' src={Pstore}/>

            </div>
        </div>
      
      </div>
      <div className='order-1 md:order-2 basis-1/2 p-5' data-aos="fade-right">
            <img src={MobilePic} className=''/>
        </div>
    </div>
  )
}

export default Luckewallet
