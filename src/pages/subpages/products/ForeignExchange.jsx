import React from 'react'
import Carousel from '../../../components/Carousel'
import banner from '../../../media/products/fePgBanner.webp'
import Description from '../../../components/Description';
//import fdUpload from '../../../media/uploads/fe13112024.webp'
import { useTranslation } from "react-i18next";


const ForeignExchange = () => {
  const { t } = useTranslation();
  const data = t("forexPage", { returnObjects: true });
  
const image = {
  src: banner,
  title: data.title,
};
  return (
    <div>
      <Carousel image={image}/>
      <Description description={data.description} />
      <div className='flex justify-center p-10 bg-white'>
          {/*<img className='p-10' src={fdUpload}/>*/}
      </div>

      <a href='tel://+94117699000'>
      <div className="max-w-xs mx-auto bg-amber-300 hover:bg-amber-400 transition-colors duration-300 ease-in-out shadow-lg rounded-lg py-2 px-4 text-center mb-10">
      <h2 className="text-lg font-bold text-blue-700">{data.hotline}</h2>
      <p className="mt-1 text-2xl font-semibold text-gray-800">0117 699 000</p>
    </div>
    </a>
    </div>
  )
}

export default ForeignExchange
