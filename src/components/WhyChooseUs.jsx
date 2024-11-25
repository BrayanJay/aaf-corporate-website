import React from 'react'
import Wcu1 from '../assets/wcu1.svg'
import Wcu2 from '../assets/wcu2.svg'
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const whyChooseUs = t("whyChooseUs", { returnObjects: true });

  return (
    <div className='flex max-w-auto max-h-auto'>
      <div className='grid grid-rows-2 grid-flow-row md:grid-flow-col w-full h-full relative px-10 lg:px-40 md:gap-2'>
        <div className='w-56 lg:w-72 h-full row-span-2 rounded-tr-lg rounded-bl-lg p-2 md:p-5' data-aos="fade-right">
            <img src={Wcu1}/>
        </div>
        <div className='w-56 lg:w-72 h-full row-span-2 rounded-tr-lg rounded-bl-lg p-2 md:p-5' data-aos="fade-right">
            <img src={Wcu2}/>
        </div>
        <div className='col-span-2 px-2 lg:px-5 border-l-4 lg:border-l-8 border-blue-900' data-aos="fade-up">
            <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700'>{whyChooseUs.title_left} <span className='font-extrabold text-blue-900'>{whyChooseUs.title_right}</span></h1>
            <p className='text-xs lg:text-base pt-5 text-black/50'>{whyChooseUs.description}</p>
        </div>
        <div className='col-span-2 pt-5 pr-5 pb-5 bordr-l-5 border-blue-900' data-aos="fade-up">
              <div className='flex flex-row gap-5 justify-center content-center'>
                  <div className='h-32 w-32 lg:h-40 lg:w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-3 lg:p-1 text-xs lg:text-sm'>{whyChooseUs.card1}</div>
                  <div className='h-32 w-32 lg:h-40 lg:w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-3 lg:p-1 text-xs lg:text-sm'>{whyChooseUs.card2}</div>
                  <div className='h-32 w-32 lg:h-40 lg:w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-3 lg:p-1 text-xs lg:text-sm'>{whyChooseUs.card3}</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
