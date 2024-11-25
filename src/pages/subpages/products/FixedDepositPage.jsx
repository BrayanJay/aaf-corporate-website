import React from 'react'
import Carousel from '../../../components/Carousel'
import banner from '../../../assets/products/fd.svg'
import Description from '../../../components/Description';
import fdUpload from '../../../assets/uploads/fd11112024.webp'
import { useTranslation } from "react-i18next";


const FixedDepositPage = () => {
  const { t } = useTranslation();
  const data = t("fdPage", { returnObjects: true });
  
const image = {
  src: banner,
  title: data.title,
};

  return (
    <div>
      <Carousel image={image}/>
      <Description description={data.description} />
      <div className='flex justify-center p-10 bg-white'>
          <img className='p-10' src={fdUpload}/>
      </div>
    </div>
  )
}

export default FixedDepositPage