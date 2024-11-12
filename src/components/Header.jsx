import React from 'react'
import logo from '../assets/logo.svg'
import greatPlace2Work from '../assets/gpw.svg'
import fitchA from '../assets/fitchA.svg'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from './LanguageSelector';

library.add(fas, fab);

export const Header = () => {

  const itemClasses = "text-base py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100";

  const menu = (
    <ul className='bg-white'>
      <li> <a className={itemClasses} href="#" >English</a > </li>
      <li> <a className={itemClasses} href="#" >Sinhala</a > </li>
      <li> <a className={itemClasses} href="#" >Tamil</a > </li>
    </ul>
  )

  return (
<div id='top-navbar' className='lg:h-24 md:h-16 h-10 bg-blue-950'>
  <div id='inner-container' className='flex flex-initial justify-start'>
    <div id='logo-bg' className='flex bg-white pl-10 gap-10'>
      <img className='lg:h-24 md:h-16 h-10' src={logo}></img>
      <LanguageSelector menu={menu} placement="bottom-left" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2  text-black font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-black/10 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            English
          </button>
        </LanguageSelector>
    </div>
    <div id='certificates' className='p-2 basis-1/3 flex justify-start lg:gap-5 md:gap-3 gap-2'>
      <img className='lg:h-20 md:h-12 h-6' src={greatPlace2Work}></img>
      <img className='lg:h-20 md:h-12 h-6' src={fitchA}></img>
    </div>
    <div id='certificates' className='pr-10 p-2 basis-1/3 flex justify-end lg:gap-5 md:gap-3 gap-2'>
      <div className="  ButtonType4 h-12 p-2.5 opacity-75 rounded-tl-lg rounded-br-lg border-2 justify-center items-center gap-2.5 inline-flex mt-4">
        <FontAwesomeIcon icon={['fas', 'location-dot']} className='text-white hover:text-bluegradient border-white hover:border-bluegradient' size='lg'/>
      </div>
      <div className="ButtonType4 h-12 p-2.5 opacity-75 rounded-tl-lg rounded-br-lg border-2 justify-center items-center gap-2.5 inline-flex mt-4">
        <FontAwesomeIcon icon={['fas', 'phone']} className='text-white hover:text-bluegradient border-white hover:border-bluegradient' size='lg'/>
        <span className='text-white hover:text-bluegradient border-white hover:border-bluegradient'>Customer Care</span>
      </div>
    </div>
  </div>
</div>
  )
}
