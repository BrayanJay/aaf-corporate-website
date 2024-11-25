import React from 'react'
import Carousel from '../../../components/Carousel'
import banner from '../../../assets/products/le.svg'
import Description from '../../../components/Description';
import Upload from '../../../assets/uploads/le13112024.webp'
import { useTranslation } from "react-i18next";


const LeasingPage = () => {
  const { t } = useTranslation();
  const data = t("leasingPage", { returnObjects: true });
  
  const image = {
    src: banner,
    title: data.title,
  };
  return (
    <div>
      <Carousel image={image}/>
      <Description description={data.description} />
      <div className='flex justify-center p-10 bg-white'>
          <img className='p-10' src={Upload}/>
      </div>
    </div>
  )
}

export default LeasingPage
