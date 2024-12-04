import React from 'react'
import { useTranslation } from 'react-i18next';
import Carousel from '../../../components/Carousel';
import Luckewallet from '../../../components/Luckewallet';
import Description from '../../../components/Description';
import banner from '../../../media/products/luckewalletPgBanner4.webp';
import MobilePic from '../../../media/products/luckewallet.webp'
import luckewallet_logo from '../../../media/luckewalletlogo.webp';

import Astore from '../../../media/appStoreBtn.webp';
import Pstore from '../../../media/playStoreBtn.webp';

const LuckewalletPage = () => {
  const { t } = useTranslation();
  const data = t("luckewalletPage", { returnObjects: true });


  const image = {
    src: banner,
    title: data.title,
    intro:data.subtitle,
  };
  return (
    <div>
      <div className="relative">
  <Carousel image={image} />
  <div className="absolute left-0 bottom-0 flex gap-1 sm:gap-2 md:gap-3 lg:gap-5 p-5">
    <a href="https://apps.apple.com/lk/app/asia-asset-luckewallet/id1637028447">
      <img className="w-24 lg:w-36 hover:cursor-pointer hover:shadow-lg" src={Astore} alt="App Store"/>
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.AsiaAsset.luckewallet&pli=1">
      <img className="w-24 lg:w-36 hover:cursor-pointer hover:shadow-lg" src={Pstore} alt="Play Store"/>
    </a>
  </div>
</div>
      <Description description={data.description}/>
      <Luckewallet MobilePic={MobilePic} logo={luckewallet_logo}/>
      <div className='flex justify-center p-10 gap-5 bg-white'>
      <a href={data.kfd}
          target="_blank"
          rel="noopener noreferrer"><div className='px-3 py-1.5 border-2 border-blue-500 text-blue-500 text-xs sm:text-base hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center'>{data.btn_1}</div></a>
      {/*<a href={Upload}><div className='px-3 py-1.5 border-2 border-amber-400 text-amber-400 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center'>Charges & Tariff Sheet</div></a>*/}
      </div>

      <a href='tel://+94765699699'>
      <div className="max-w-xs mx-auto bg-amber-300 hover:bg-amber-400 transition-colors duration-300 ease-in-out shadow-lg rounded-lg py-2 px-4 text-center mb-10">
      <h2 className="text-lg font-bold text-blue-700">{data.hotline}</h2>
      <p className="mt-1 text-2xl font-semibold text-gray-800">0765 699 699</p>
    </div>
    </a>
    </div>
  )
}

export default LuckewalletPage
