import React from 'react'
import Carousel from '../../../components/Carousel'
import banner from '../../../assets/products/gl.svg'
import Description from '../../../components/Description';
import glUpload from '../../../assets/uploads/gl13112024.webp'

import { useTranslation } from "react-i18next";



const AboutOverview = {
  title: "Overview",
  description: "Responsibility is something that comes to all of us. You can be a father, contemplating your daughter’s wedding and the expenses that come with. A mother striving to give her son the best possible education. A spouse in dire need of money for your better half’s sudden surgery. Fear not, ladies and gentlemen. Our Gold Loan Service has got you and your finances covered. Simply walk to any Asia Asset Branch and speak to one of our caring professionals and we’ll take it from there. Here are the guarantees. Instant money. Flexible interest rates, according to your situation. And at the end of it all, your gold has seen a safer space! We are, after all- a fully owned subsidiary of Muthoot Finance, legendary multinational Financial Service Provider with the LARGEST gold loan portfolio around the globe. With Asia Asset Finance PLC’s Gold Loan services, it takes no more than a few minutes for your gold to generate cash. All you need is the gold."
};

const GoldLoanPage = () => {
  const { t } = useTranslation();
  const data = t("goldLoanPage", { returnObjects: true });

  const image = {
    src: banner,
    title: data.title,
  };

  return (
    <div>
      <Carousel image={image}/>
      <Description description={data.description} />
      <div className='flex justify-center p-10 bg-white'>
          <img className='p-10' src={glUpload}/>
      </div>
    </div>
  )
}

export default GoldLoanPage
