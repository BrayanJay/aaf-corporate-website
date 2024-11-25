import React from 'react'
import FinancialsCard from './FinancialsCard'
import { useTranslation } from 'react-i18next';

const FinancialKeys = () => {
  const { t } = useTranslation();
  const data = t("keyFinancialsIR", { returnObjects: true });
  return (
    <div className='px-10 lg:px-40 flex flex-col justify-center'>
      <div className='text-center  text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold py-2 lg:py-5'>
        {data.title1} <span className='font-light text-blue-500'> {data.title2}</span></div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-20 py-5">
          <FinancialsCard amount={data.card1_amount} title={data.card1_title} />
          <FinancialsCard amount={data.card2_amount} title={data.card2_title} />
          <FinancialsCard amount={data.card3_amount} title={data.card3_title} />
          <FinancialsCard amount={data.card4_amount} title={data.card4_title} />
          <FinancialsCard amount={data.card5_amount} title={data.card5_title} />
        </div>


      <div className="block bg-bluegradient rounded-tl-3xl rounded-br-3xl mx-auto w-fit px-5 lg:px-10 my-5">
        <div className="lg:gap-20 flex flex-col sm:flex-row justify-center items-center">

          <div className="text-center sm:text-left flex justify-center items-center">
            <div className="text-white text-xl sm:text-2xl font-black">{data.share_price_title}</div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="p-2 sm:p-4 flex flex-col justify-center items-center">
              <div className="text-white text-sm sm:text-xs font-normal">{data.share_price_req}</div>
              <div className="text-white text-base sm:text-sm font-bold">{data.share_price_name}</div>
              <div className="px-2 flex flex-col justify-center items-center">
                <div className="text-white text-sm sm:text-xs font-normal">{data.share_price_type} {data.share_price_amount}</div>
                <div className="text-white text-sm sm:text-xs font-normal">{data.share_price_percentage}%</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='flex flex-col gap-2 lg:gap-5 text-center text-xs lg:text-sm font-medium text-black/50 py-5'>
        <span>{data.description_line1}</span>
        <span>{data.description_line2}</span>
        <span>{data.description_line3}</span>
        <span>{data.description_line4}</span>
      </div>
    </div>
  )
}

export default FinancialKeys
