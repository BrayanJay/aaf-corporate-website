import React from 'react'
import LuckewalletLogo from '../assets/luckewalletlogo.svg'

import LuckewalletImg from '../assets/products/wallet.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductLuckewallet = () => {
  return (
    <div className='flex lg:flex-row flex-col relative px-10 lg:px-40 pt-20 ' data-aos="fade-up">
        <div className='relative lg:basis-1/2 lg:pb-10'>
            <img className='' src={LuckewalletImg}/>
        </div>
        <div className='flex flex-col lg:basis-1/2'>
            <img className='lg:w-1/3 ml-auto' src={LuckewalletLogo}/>
            <p className='py-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-right'>For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business’. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.</p>
            <p className='py-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-right'>Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.</p>
        
            <div className='relative py-5 justify-end ml-auto' data-aos="fade-up">
                <h1 className='text-sm md:text-lg lg:text-xl font-semibold text-blue-900 text-right'>Key <span className='font-bold text-amber-400'>Features</span></h1>
                <div className='grid grid-cols-2 grid-flow-row gap-2'>
                
                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'list-check']} className='pt-1 text-blue-700 hover:text-bluegradient border-white hover:border-bluegradient text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>Easy Account Management</h1>
                    <p className='text-xs text-blue-900/50'>View and manage all your accounts effortlessly in one place.</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'hand-holding-dollar']} className='pt-1 text-blue-700 border-white text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>Quick Loan Applications</h1>
                    <p className='text-xs text-blue-900/50'>Apply for loans and track your application status seamlessly.</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'shield-halved']} className='pt-1 text-blue-700 border-white text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>Easy Account Management</h1>
                    <p className='text-xs text-blue-900/50'>View and manage all your accounts effortlessly in one place.</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'bell']} className='pt-1 text-blue-700 border-white text-sm lg:text-lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>Real-time Notifications</h1>
                    <p className='text-xs text-blue-900/50'>Stay updated with instant alerts on account activities and offers.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductLuckewallet
