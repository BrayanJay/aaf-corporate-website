import React from 'react'
import { useTranslation } from "react-i18next";
import LuckewalletLogo from '../media/luckewalletlogo.webp'

import LuckewalletImg from '../media/products/luckewallet.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductLuckewallet = () => {
    const { t } = useTranslation();
    const data = t("luckewalletProductsPage", { returnObjects: true });

  return (
    <div className='flex lg:flex-row flex-col relative px-10 lg:px-40 pt-20 ' data-aos="fade-up">
        <div className='relative lg:basis-1/2 lg:pb-10'>
            <img className='' src={LuckewalletImg}/>
        </div>
        <div className='flex flex-col lg:basis-1/2'>
            <img className='lg:w-1/3 ml-auto' src={LuckewalletLogo}/>
            <p className='py-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-right'>{data.description1}</p>
            <p className='py-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-right'>{data.description2}</p>
        
            <div className='relative py-5 justify-end ml-auto' data-aos="fade-up">
                <h1 className='text-sm md:text-lg lg:text-xl font-semibold text-blue-900 text-right'>{data.kFeature1} <span className='font-bold text-amber-400'>{data.kFeature2} </span></h1>
                <div className='grid grid-cols-2 grid-flow-row gap-2'>
                
                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'list-check']} className='pt-1 text-blue-700 hover:text-bluegradient border-white hover:border-bluegradient text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{data.f1title} </h1>
                    <p className='text-xs text-blue-900/50'>{data.f1Text}</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'hand-holding-dollar']} className='pt-1 text-blue-700 border-white text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{data.f2title}</h1>
                    <p className='text-xs text-blue-900/50'>{data.f2Text}</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'shield-halved']} className='pt-1 text-blue-700 border-white text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{data.f3title}</h1>
                    <p className='text-xs text-blue-900/50'>{data.f3Text}</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'bell']} className='pt-1 text-blue-700 border-white text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{data.f4title}</h1>
                    <p className='text-xs text-blue-900/50'>{data.f4Text}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductLuckewallet
