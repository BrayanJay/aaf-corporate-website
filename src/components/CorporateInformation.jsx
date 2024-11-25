import React from 'react'
import { useTranslation } from 'react-i18next';

import bank1 from '../assets/bankers/boc.svg'
import bank2 from '../assets/bankers/combank.svg'
import bank3 from '../assets/bankers/dfcc.svg'
import bank4 from '../assets/bankers/indian-bank.svg'
import bank5 from '../assets/bankers/ndb.svg'
import bank6 from '../assets/bankers/panasia.svg'
import bank7 from '../assets/bankers/peoples.svg'
import bank8 from '../assets/bankers/sampath.svg'
import bank9 from '../assets/bankers/seylan.svg'

const logos = [bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8, bank9]

const CorporateInformation = () => {
    const { t } = useTranslation();
    const corporateProfile = t("corporateProfileIR", { returnObjects: true });
  return (
    <div className='w-full px-10 lg:px-40'>
        <div className="flex flex-col relative justify-center items-start pt-10">
          <div className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold pl-2 lg:pl-4">
            {corporateProfile.title1} <span className='font-light text-blue-500'> {corporateProfile.title2}</span></div>
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-40'>
        <div className='flex flex-col lg:basis-1/2 py-5 gap-5 '>
            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label1}
                </div>
                <div className='text-xs lg:text-sm md:text-base font-medium text-blue-900/80'>
                {corporateProfile.field1}
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label2}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field2}
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label3}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_1}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_2}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_3}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_4}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_5}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_6}
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label4}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field4}
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label5}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                {corporateProfile.field5}
                </span>
                </div>
            </div>

        </div>

        <div className='flex flex-col lg:basis-1/2 py-5 gap-5 '>
            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label6}
                </div>
                <div className='text-xs lg:text-sm font-bold text-blue-900/80'>
                {corporateProfile.field6_1}
                </div>
                <div className='text-xs lg:text-sm font-bold text-blue-900/80'>
                {corporateProfile.field6_2}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_3}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_4}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_5}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_6}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_7}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_8}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_9}
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label7}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                {corporateProfile.field7}
                </span>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label8}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                {corporateProfile.field8}
                </span>
                </div> 
            </div>
        </div>
        </div>
        
        <div className='px-20 py-5 text-center'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label9}
                </div>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {logos.map((Logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={Logo} alt={`Logo ${index + 1}`} className="w-24 h-24" />
                    </div>
                    ))}
                    </div>
                </div>
                
        </div>

    </div>
  )
}

export default CorporateInformation
