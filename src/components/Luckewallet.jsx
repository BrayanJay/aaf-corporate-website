import React from 'react'
import Wcu1 from '../assets/lwallet.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Astore from '../assets/appstorelogo.svg'
import Pstore from '../assets/playstorelogo.svg'

const Luckewallet = () => {
  return (
    <div className='flex flex-row max-w-[1920px] max-h-[1080px] pr-40'>
      <div className='basis-1/2 w-full h-full relative pl-40 gap-2'>

        <div className='relative ' data-aos="fade-up">
            <h1 className='border-l-8 border-blue-500 p-5 text-4xl font-semibold text-blue-900'>Simplify Your Financial Journey with Our <span className='font-bold text-amber-400'>Luckewallet</span> Mobile App </h1>
            <p className='border-l-8 border-blue-500 pl-5 pr-5 pb-5 text-lg font-semibold text-stone-500'>Experience seamless and secure financial services right from your smartphone. <span className='font-medium italic underline hover:cursor-pointer text-blue-900'>Learn More</span></p>
        </div>
        <div className='relative p-5' data-aos="fade-up">
            <h1 className='text-xl font-semibold text-blue-900'>Key <span className='font-bold text-amber-400'>Features</span></h1>
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
            <div className='flex gap-5 pt-10'>
                <img className='w-36 hover:cursor-pointer hover:shadow-lg' src={Astore}/>
                <img className='w-36 hover:cursor-pointer hover:shadow-lg' src={Pstore}/>

            </div>
        </div>
      
      </div>
      <div className=' basis-1/2 p-5' data-aos="fade-right">
            <img src={Wcu1} className=''/>
        </div>
    </div>
  )
}

export default Luckewallet
