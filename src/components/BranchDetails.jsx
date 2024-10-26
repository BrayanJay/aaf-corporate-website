import React from 'react'
import map from '../assets/map.svg'

//branches
import deniyaya from '../assets/branches/deniyaya.svg'

const BranchDetails = () => {

  return (
    <div className='flex justify-center relative bg-bgdesign bg-cover text-roboto'>
      <div className='absolute inset-0 bg-white bg-opacity-80'></div> 
      <div className="basis-1/2 z-10">
        <img src={map} />
      </div>
      <div className="basis-1/2 z-10">
      <div className='relative pr-40 pt-20 ' data-aos="fade-up">
                <h1 className='border-r-8 border-blue-500 pl-5 pr-5 text-4xl font-semibold text-blue-700 text-right'> Our <span className='text-4xl font-black text-blue-900'>Branches</span></h1>
                <p className='border-r-8 border-blue-500 pl-5 pr-5 pt-1 text-xl font-md text-blue-500 italic text-right'>Bringing Financial Solutions Closer to You</p>
                <p className='pb-5 pt-5 text-sm font-md text-stone-500 text-right'>Visit one of our <span className='font-bold text-blue-700'>90+ branches</span> today and experience the personalized service that <span className='font-bold text-blue-700'>Asia Asset Finance PLC</span> is known for. We're here to support your financial journey, no matter where you are in Sri Lanka.</p>

                <p className=' pl-5 pr-5 pt-5 text-xl font-bold text-blue-500 italic text-right'>Our Newest Branches</p>
                <p className='pb-5 pt-5 text-sm font-md text-stone-500 text-justify'>We're excited to announce the opening of our newest branches, bringing our trusted financial services even closer to you. As part of our commitment to accessibility and community support, these branches are equipped to provide the full range of Asia Asset Finance products and services. Visit us at our latest locations and experience the same reliable and personalized service that you've come to expect from us.</p>
            
                <div className='flex flex-row'>
                  <div className='basis-1/2'>
                    <img className='rounded-2xl shadow-lg' src={deniyaya}/>
                  </div>
                  <div className='pl-3'>
                  <p className='pt-5 text-xl font-black text-blue-900'>Deniyaya</p>
                  <p className='pt-1 text-sm font-md text-blue-900/80 text-justify'>No 196, Main Street, Deniyaya</p>
                  <p className='text-sm font-md text-blue-900/80 text-justify'>+94 11 7699000</p>
                  <p className='text-sm font-md text-blue-900/80 text-justify'>deniyaya@aaf.lk</p>
                  <div className='flex absolute py-1.5 px-3 mt-2 bg-lightbluegradient rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-bluegradient transition delay-200 ease-in-out rounded-sm text-white text-sm font-medium font-roboto'>Read More</div>
                  </div>
                  
                </div>
            </div>
            
      </div>
      
    </div>
  )
}

export default BranchDetails
