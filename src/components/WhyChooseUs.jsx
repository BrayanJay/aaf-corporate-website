import React from 'react'
import Wcu1 from '../assets/wcu1.svg'
import Wcu2 from '../assets/wcu2.svg'

const WhyChooseUs = () => {
  return (
    <div className='flex max-w-[1920px] max-h-[1080px]'>
      <div className='grid grid-rows-2 grid-flow-col w-full h-full relative pl-40 pr-40 gap-2'>
        <div className='w-72 h-full row-span-2 rounded-tr-lg rounded-bl-lg p-5' data-aos="fade-right">
            <img src={Wcu1}/>
        </div>
        <div className='w-72 h-full row-span-2 rounded-tr-lg rounded-bl-lg p-5' data-aos="fade-right">
            <img src={Wcu2}/>
        </div>
        <div className='col-span-2 p-5 border-l-8 border-blue-900' data-aos="fade-up">
            <h1 className='text-4xl font-semibold text-blue-700'>Why Choose <span className='font-extrabold text-blue-900'>Asia Asset Finance</span></h1>
            <p className='pt-5'>For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.</p>
        </div>
        <div className='col-span-2 pt-5 pr-5 pb-5 bordr-l-5 border-blue-900' data-aos="fade-up">
            <div className='flex flex-row gap-5 justify-center content-center'>
                <div className='h-40 w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-1'>Tailored Financial Solutions for Every Stage of Life</div>
                <div className='h-40 w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-1'>Unparalleled Customer Service with a Personal Touch</div>
                <div className='h-40 w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-1'>Innovative Products Backed by Decades of Expertise</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
