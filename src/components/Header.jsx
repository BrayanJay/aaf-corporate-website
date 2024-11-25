import React from 'react'
import logo from '../assets/logo.svg'
import greatPlace2Work from '../assets/gpw.svg'
import fitchA from '../assets/fitchA.svg'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';

library.add(fas, fab);

export const Header = () => {

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
<div id='top-navbar' className=' bg-blue-950'>
  <div id='inner-container' className='flex flex-initial justify-between'>
    <div className='flex flex-row'>
    <div id='logo-bg' className='flex bg-white'>
      <img className='lg:h-24 md:h-16 h-10' src={logo}></img>
    </div>
    <div id='certificates' className='p-2 basis-1/3 flex justify-start lg:gap-5 md:gap-3 gap-2'>
      <img className='lg:h-20 md:h-12 h-6' src={greatPlace2Work}></img>
      <img className='lg:h-20 md:h-12 h-6' src={fitchA}></img>
    </div>
    </div>
    <div className='flex flex-row px-10 items-center'>
    <div id='certificates' className='py-2 px-2 lg:px-10 flex justify-end lg:gap-5 md:gap-3 gap-2'>
      {/*<div className="  ButtonType4 h-12 p-2.5 opacity-75 rounded-tl-lg rounded-br-lg border-2 justify-center items-center gap-2.5 inline-flex mt-4 cursor-pointer hover:bg-goldgradient hover:border-white">
        <FontAwesomeIcon icon={['fas', 'location-dot']} className='text-white hover:text-bluegradient border-white hover:font-bold' size='lg'/>
      </div>*/}
      <Link to="/contacts" onClick={scrolltoTop}>
      <div className=''>
      <div className="lg:h-12 p-2.5 rounded-tl-lg rounded-br-lg border-2 items-center gap-2.5 cursor-pointer hover:bg-goldgradient hover:border-white hover:font-bold transition-all duration-300 ease-in-out text-xs lg:text-sm hidden sm:block">
        <FontAwesomeIcon icon={['fas', 'phone']} className='transition-all duration-300 ease-in-out text-white hover:text-bluegradient border-white hover:border-bluegradient px-2'/>
        <span className='transition-all duration-300 ease-in-out text-white hover:text-bluegradient border-white '>Customer Care</span>
      </div>
      </div>
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
