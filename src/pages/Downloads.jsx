import React from 'react'
import DownloadsCard from '../components/DownloadsCard'
import { useTranslation } from "react-i18next";

const Downloads = () => {
    const { t } = useTranslation();
    const data = t("downloadsTexts", { returnObjects: true });
  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
        <div className="">
          <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
            {data.title}
          </div>
          <div id="annual-reports" className="">
          <div className='py-5 lg:py-10'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {data.section1}
                </div>
                <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
                test
                </div>
                <DownloadsCard/>
            </div>

            <div className='py-5 lg:py-10'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {data.section2}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                test
                </div>
                <DownloadsCard/>
            </div>

            <div className='py-5 lg:py-10'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {data.section3}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                test
                </div>
                <DownloadsCard/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Downloads