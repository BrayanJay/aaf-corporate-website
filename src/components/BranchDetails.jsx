import React from 'react'
import map from '../assets/map.svg'
import { useTranslation } from "react-i18next";

//branches
import deniyaya from '../assets/branches/deniyaya.svg'

const BranchDetails = () => {
  const { t } = useTranslation();
  const branchDetails = t("branchDetailsLandingPage", { returnObjects: true });

  return (
    <div className='flex flex-col lg:flex-row justify-center relative bg-bgdesign bg-cover text-roboto'>
      <div className='absolute inset-0 bg-white bg-opacity-80'></div> 
      <div className="lg:basis-1/2 pt-10 md:pt-0 z-10" data-aos="zoom-in">
        <img src={map} />
      </div>
      <div className="lg:basis-1/2 z-10" data-aos="fade-up">
      <div className='relative px-10 lg:px-40 pt-10 lg:pt-20 ' data-aos="fade-up">
                <h1 className='border-r-4 lg:border-r-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700 text-right'> {branchDetails.title1} <span className='font-black text-blue-900'>{branchDetails.title2}</span></h1>
                <p className='border-r-4 lg:border-r-8 border-blue-500 pl-5 pr-5 lg:pt-1 text-xs lg:text-xl font-md text-blue-500 italic text-right'>{branchDetails.subtitle}</p>
                <p className='pb-5 pt-5 text-xs lg:text-sm font-md text-black/50 text-right'>{branchDetails.description1} <span className='font-bold text-blue-700'>{branchDetails.description2}</span> {branchDetails.description3} <span className='font-bold text-blue-700'>{branchDetails.description4}</span> {branchDetails.description5}</p>

                <p className=' lg:pl-5 lg:pr-5 lg:pt-5 text-sm lg:text-xl font-bold text-blue-500 italic text-right'>{branchDetails.newbranches_title}</p>
                <p className='pb-5 pt-5 text-xs lg:text-sm font-md text-black/50 text-justify'>{branchDetails.newbranches_description}</p>
            
                <div className='flex flex-col lg:flex-row'>
                  <div className='lg:basis-1/2'>
                    <img className='rounded-2xl shadow-lg' src={deniyaya}/>
                  </div>
                  <div className='lg:pl-3'>
                  <p className='text-xl font-black text-blue-900'>{branchDetails.newest_branch_name}</p>
                  <p className='pt-1 text-sm font-md text-blue-900/80 text-justify'>{branchDetails.newest_branch_address}</p>
                  <p className='text-sm font-md text-blue-900/80 text-justify'>{branchDetails.newest_branch_tp}</p>
                  <p className='text-sm font-md text-blue-900/80 text-justify'>{branchDetails.newest_branch_email}</p>
                  <div className='flex absolute py-1.5 px-3 mt-2 bg-lightbluegradient rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-bluegradient transition delay-200 ease-in-out rounded-sm text-white text-sm font-medium font-roboto'>Read More</div>
                  </div>
                  
                </div>
            </div>
            
      </div>
      
    </div>
  )
}

export default BranchDetails
