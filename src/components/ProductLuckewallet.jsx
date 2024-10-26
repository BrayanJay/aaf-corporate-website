import React from 'react'
import LuckewalletLogo from '../assets/luckewalletlogo.svg'

import LuckewalletImg from '../assets/products/wallet.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductLuckewallet = () => {
  return (
    <div className='flex flex-row relative pr-40 pt-20 ' data-aos="fade-up">
        <div className='relative basis-1/2 pl-40 pb-10'>
            <img className='' src={LuckewalletImg}/>
        </div>
        <div className='flex flex-col basis-1/2'>
            <img className='w-1/3 ml-auto' src={LuckewalletLogo}/>
            <p className='pb-5 pt-5 text-sm font-semibold text-black/50 text-right'>For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business’. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.</p>
            <p className='pb-5 pt-5 text-sm font-semibold text-black/50 text-right'>Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.</p>
        
            <div className='relative p-5 justify-end ml-auto' data-aos="fade-up">
                <h1 className='text-xl font-semibold text-blue-900 text-right'>Key <span className='font-bold text-amber-400'>Features</span></h1>
                <div className='grid grid-cols-2 grid-flow-row gap-2'>
                
                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'list-check']} className='pt-1 text-blue-700 hover:text-bluegradient border-white hover:border-bluegradient' size='lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold'>Easy Account Management</h1>
                    <p className='text-xs text-blue-900/50'>View and manage all your accounts effortlessly in one place.</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'hand-holding-dollar']} className='pt-1 text-blue-700 border-white' size='lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold'>Quick Loan Applications</h1>
                    <p className='text-xs text-blue-900/50'>Apply for loans and track your application status seamlessly.</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'shield-halved']} className='pt-1 text-blue-700 border-white' size='lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold'>Easy Account Management</h1>
                    <p className='text-xs text-blue-900/50'>View and manage all your accounts effortlessly in one place.</p>
                    </div>
                    </div>

                    <div className='relative max-w-64 flex gap-2 pt-5'>
                    <FontAwesomeIcon icon={['fas', 'bell']} className='pt-1 text-blue-700 border-white' size='lg'/>
                    <div className=''>
                    <h1 className='text-blue-700 font-bold'>Real-time Notifications</h1>
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
