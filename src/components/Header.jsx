import React from 'react'
import logo from '../media/logo.webp'
import mLogo from '../media/muthootLogo.webp'
import greatPlace2Work from '../media/gpw.webp'
import fitchA from '../media/fitchA.webp'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

library.add(fas, fab);

export const Header = () => {
  const { t } = useTranslation();
  const data = t("header", { returnObjects: true });

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
<div id='top-navbar' className=' bg-blue-950 sticky top-0 z-40'>
  <div id='inner-container' className='flex flex-initial justify-between'>
    <div className='flex flex-row'>
    <div id='logo-bg' className='flex bg-white px-2'>
      <Link to="/web"><img className='lg:h-20 md:h-16 h-10 md:pl-5 max-w-56 py-1 lg:py-2' src={logo}></img></Link>
    </div>
    <div id='certificates' className='justify-start md:justify-center w-full h-full bg-blue950 md:bg-white p-2 flex items-center lg:gap-5 md:gap-3 gap-2'>
    <a href='https://www.muthootfinance.com' target="_blank" rel="noopener noreferrer"><img className='lg:h-10 md:h-8 h-4 max-w-28 justify-end' src={mLogo}></img></a>
      <img className='lg:h-16 md:h-12 h-6' src={greatPlace2Work}></img>
      <img className='lg:h-16 md:h-12 h-6' src={fitchA}></img>
    </div>
    </div>

    <div className='flex flex-row items-center pr-2 md:pr-10'>
    <div id='certificates' className='py-2 px-2 lg:px-10 flex justify-end lg:gap-5 md:gap-3 gap-2'>
      {/*<div className="  ButtonType4 h-12 p-2.5 opacity-75 rounded-tl-lg rounded-br-lg border-2 justify-center items-center gap-2.5 inline-flex mt-4 cursor-pointer hover:bg-goldgradient hover:border-white">
        <FontAwesomeIcon icon={['fas', 'location-dot']} className='text-white hover:text-bluegradient border-white hover:font-bold' size='lg'/>
      </div>*/}
      <Link to="/web/contacts" onClick={scrolltoTop}>
      <div className=''>
      <div className="lg:h-12 p-1 lg:p-2.5 rounded-tl-lg rounded-br-lg border-2 items-center gap-2.5 cursor-pointer hover:bg-goldgradient hover:border-white hover:font-bold transition-all duration-300 ease-in-out text-xs lg:text-sm hidden sm:block">
        <FontAwesomeIcon icon={['fas', 'phone']} className='transition-all duration-300 ease-in-out text-white hover:text-bluegradient border-white hover:border-bluegradient px-1 lg:px-2'/>
        <span className='transition-all duration-300 ease-in-out text-white hover:text-bluegradient border-white '>{data.title}</span>
      </div>
      </div>
      </Link>
      <Link to="/web/contacts" onClick={scrolltoTop}>
      <FontAwesomeIcon icon={['fas', 'phone']} className='sm:hidden transition-all duration-300 ease-in-out text-white hover:text-amber-400 border-white hover:border-bluegradient px-2 items-center'/>
      </Link>
    </div>
    <div className="block self-center content-center">
      <LanguageSelector/>
    </div>
    </div>
  </div>
</div>
  )
}
