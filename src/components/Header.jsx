import logo from '../media/logos/logo.webp'
import mLogo from '../media/logos/muthootLogo.webp'
import greatPlace2Work from '../media/logos/gpw.webp'
import fitchA from '../media/logos/fitchA.webp'
import FiftyPlusYearsLight from '../media/logos/50YearsPlus-light.webp'
import FiftyPlusYearsDark from '../media/logos/50YearsPlus-dark.webp'
import HundredPlusBranchesLight from '../media/logos/100PlusBranches-light.webp'
import HundredPlusBranchesDark from '../media/logos/100PlusBranches-Dark.webp'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'

library.add(fas, fab);

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmall;
};

export const Header = () => {
  const { t } = useTranslation();
  const data = t("header", { returnObjects: true });
  const isSmall = useIsSmallScreen();

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
<div id='top-navbar' className=' bg-blue-950 sticky top-0 z-40'>
  <div id='inner-container' className='flex flex-initial justify-between'>
    <div className='flex flex-row'>
    <div id='logo-bg' className='flex bg-white px-2'>
      <Link to="/"><img className='lg:h-20 md:h-16 h-10 md:pl-5 max-w-56 py-1 lg:py-2' aria-label="Asia Asset Finance Logo" src={logo} onClick={scrolltoTop}></img></Link>
    </div>
    <div id='certificates' className='justify-start md:justify-center w-full h-full md:bg-white p-2 flex items-center lg:gap-5 md:gap-3 gap-2'>
    <a href='https://www.muthootfinance.com' target="_blank" rel="noopener noreferrer"><img className='lg:h-10 md:h-8 h-4 max-w-28 justify-end' aria-label="Muthoot Finance" src={mLogo}></img></a>
      <a href='https://greatplacetowork.lk/best-workplace/asia-asset-finance-plc/' target='_blank'><img className='lg:h-16 md:h-12 h-6' aria-label="Great Place to work certification" src={greatPlace2Work}></img></a>
      <a href='https://www.fitchratings.com/entity/asia-asset-finance-plc-90601905#ratings' target='_blank'><img className='lg:h-16 md:h-12 h-6' aria-label="Fitch ratings" src={fitchA}></img></a>
      
      <HashLink smooth to='/about'>
        <img
          className='lg:h-16 md:h-12 h-6'
          src={isSmall ? FiftyPlusYearsLight : FiftyPlusYearsDark}
          alt="50 Years Plus Excellence"
          aria-label="50 Years plus excellence"
        />
      </HashLink>
      <HashLink to="/branchnetwork">
        <img
          className='lg:h-16 md:h-12 h-6'
          src={isSmall ? HundredPlusBranchesLight : HundredPlusBranchesDark}
          alt="100+ Branches"
          aria-label="100+ Branches"
        />
      </HashLink>
    </div>
    {/*<div className='justify-start md:justify-center w-full h-full p-2 flex items-center lg:gap-5 md:gap-3 gap-2'>
      <img className='lg:h-16 md:h-12 h-6' src={legacy_years}></img>
      <HashLink to="/about/#branches"><img className='lg:h-16 md:h-12 h-6' src={branch_logo}></img></HashLink>
    </div>*/}
    </div>

    <div className='flex flex-row items-center pr-2 md:pr-10'>
    <div id='certificates' className='py-2 px-2 lg:px-10 flex justify-end lg:gap-5 md:gap-3 gap-2'>
      {/*<div className="  ButtonType4 h-12 p-2.5 opacity-75 rounded-tl-lg rounded-br-lg border-2 justify-center items-center gap-2.5 inline-flex mt-4 cursor-pointer hover:bg-goldgradient hover:border-white">
        <FontAwesomeIcon icon={['fas', 'location-dot']} className='text-white hover:text-bluegradient border-white hover:font-bold' size='lg'/>
      </div>*/}
      <Link to="/contacts" onClick={scrolltoTop}>
      <div className=''>
      <div className="lg:h-12 p-1 lg:p-2.5 rounded-tl-lg rounded-br-lg border-2 items-center gap-2.5 cursor-pointer hover:bg-goldgradient text-xs lg:text-sm hidden sm:block" aria-label="Contact Us">
        <FontAwesomeIcon icon={['fas', 'phone']} className='text-white hover:text-bluegradient border-white px-1 lg:px-2'/>
        <span className='text-white border-white '>{data.title}</span>
      </div>
      </div>
      </Link>
      {/*<Link to="/contacts" onClick={scrolltoTop}>
      <FontAwesomeIcon icon={['fas', 'phone']} className='sm:hidden text-white hover:text-amber-400 border-white px-2 items-center'/>
      </Link>*/}
    </div>
    <div className="block self-center content-center" aria-label="Select Language">
      <LanguageSelector/>
    </div>
    </div>
  </div>
</div>
  )
}
