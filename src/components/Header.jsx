import logo from '../media/logo.webp'
import mLogo from '../media/muthootLogo.webp'
import greatPlace2Work from '../media/gpw.webp'
import fitchA from '../media/fitchA.webp'
import legacy_years from '../media/50years.webp'
import branch_logo from '../media/100branches.webp'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'

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
      <Link to="/"><img className='lg:h-20 md:h-16 h-10 md:pl-5 max-w-56 py-1 lg:py-2' src={logo} onClick={scrolltoTop}></img></Link>
    </div>
    <div id='certificates' className='justify-start md:justify-center w-full h-full md:bg-white p-2 flex items-center lg:gap-5 md:gap-3 gap-2'>
    <a href='https://www.muthootfinance.com' target="_blank" rel="noopener noreferrer"><img className='lg:h-10 md:h-8 h-4 max-w-28 justify-end' src={mLogo}></img></a>
      <a href='https://greatplacetowork.lk/best-workplace/asia-asset-finance-plc/' target='_blank'><img className='lg:h-16 md:h-12 h-6' src={greatPlace2Work}></img></a>
      <a href='https://www.fitchratings.com/entity/asia-asset-finance-plc-90601905#ratings' target='_blank'><img className='lg:h-16 md:h-12 h-6' src={fitchA}></img></a>
      <HashLink smooth to='/about'><img className='lg:h-16 md:h-12 h-6 hidden sm:block' src={legacy_years}></img></HashLink>
      <HashLink to="/about/#branches"><img className='lg:h-16 md:h-12 h-6 min-w-10' src={branch_logo}></img></HashLink>
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
      <div className="lg:h-12 p-1 lg:p-2.5 rounded-tl-lg rounded-br-lg border-2 items-center gap-2.5 cursor-pointer hover:bg-goldgradient text-xs lg:text-sm hidden sm:block">
        <FontAwesomeIcon icon={['fas', 'phone']} className='text-white hover:text-bluegradient border-white px-1 lg:px-2'/>
        <span className='text-white border-white '>{data.title}</span>
      </div>
      </div>
      </Link>
      {/*<Link to="/contacts" onClick={scrolltoTop}>
      <FontAwesomeIcon icon={['fas', 'phone']} className='sm:hidden text-white hover:text-amber-400 border-white px-2 items-center'/>
      </Link>*/}
    </div>
    <div className="block self-center content-center">
      <LanguageSelector/>
    </div>
    </div>
  </div>
</div>
  )
}
