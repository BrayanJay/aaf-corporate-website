import React from 'react'
import Carousel from '../../../components/Carousel'
import banner from '../../../assets/products/mo.svg'
import Description from '../../../components/Description';
import Upload from '../../../assets/uploads/mo13112024.webp'
import { useTranslation } from "react-i18next";

const Mortgage = () => {
  const { t } = useTranslation();
  const data = t("mortgagePage", { returnObjects: true });
  
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

export default Mortgage
