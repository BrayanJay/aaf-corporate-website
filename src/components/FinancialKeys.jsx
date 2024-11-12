import React from 'react'
import FinancialsCard from './FinancialsCard'

const FinancialKeys = () => {
  return (
    <div className='px-10 lg:px-40 flex flex-col justify-center'>
      <div className='text-center  text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold py-2 lg:py-5'>
        Financial <span className='font-light text-blue-500'> Keys</span></div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-20 py-5">
          <FinancialsCard amount="XX,XXX" title="Total Income" />
          <FinancialsCard amount="XX,XXX" title="Profit After Tax" />
          <FinancialsCard amount="XX,XXX" title="Total Assets" />
          <FinancialsCard amount="XX,XXX" title="Return On Equity" />
          <FinancialsCard amount="XX,XXX" title="Earning Per Share" />
        </div>


      <div className="block bg-bluegradient rounded-tl-3xl rounded-br-3xl mx-auto w-fit px-5 lg:px-10 my-5">
        <div className="lg:gap-20 flex flex-col sm:flex-row justify-center items-center">

          <div className="text-center sm:text-left flex justify-center items-center">
            <div className="text-white text-xl sm:text-2xl font-black">Latest Share Price</div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="p-2 sm:p-4 flex flex-col justify-center items-center">
              <div className="text-white text-sm sm:text-xs font-normal">AAF.N00001</div>
              <div className="text-white text-base sm:text-sm font-bold">Asia Asset Finance PLC</div>
              <div className="px-2 flex justify-center items-center gap-2">
                <div className="text-white text-sm sm:text-xs font-normal">LKR 23.50</div>
                <div className="text-white text-sm sm:text-xs font-normal">1.000246%</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='flex flex-col gap-2 lg:gap-5 text-center text-xs lg:text-sm font-medium text-black/50 py-5'>
        <span>For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business’. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.</span>
        <span>Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.</span>
        <span>Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business.</span>
        <span>The story of Asia Asset Finance PLC is one of “ Empowering People and Transforming Lives ”.</span>
      </div>
    </div>
  )
}

export default FinancialKeys
