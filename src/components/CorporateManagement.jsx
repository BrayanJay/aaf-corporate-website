import React from 'react'
import { useTranslation } from "react-i18next";

import ProfileCard from './ProfileCard';

const CorporateManagement = () => {
    const { t } = useTranslation();
    const profileDetails = t("comProfilesAbout", { returnObjects: true });
    const comTexts = t("comTextsAbout", { returnObjects: true });


  return (
    <div className='w-full h-full relative px-10 lg:px-20 gap-2 pt-10'>

            <div className='relative ' data-aos="fade-up">
                <h1 className='border-r-4 lg:border-r-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-normal text-blue-900 text-right'> Corporate <span className='font-black text-blue-700'> Management </span></h1>
                <p className='border-r-4 lg:border-r-8 border-blue-500 px-5 md:pt-1 text-xs md:text-sm lg:text-xl font-light italic text-blue-500 text-right'>Comprehensive Solutions for Secure Financial Growth</p>
                <p className='py-5 text-xs lg:text-sm font-normal text-black/50 text-justify'>At Asia Asset Finance, our corporate management team is composed of seasoned professionals who bring a wealth of experience and insight to the table. Their strategic leadership and commitment to excellence drive our company’s success, ensuring we remain at the forefront of Sri Lanka’s financial services industry.</p>
            </div>

            {/* Corporate Management */}

            <div className="w-full h-auto flex justify-center mt-10">
            {/* Grid Layout for Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up" data-aos-delay="300">
                {profileDetails.map((profile, idx) => (
                    <ProfileCard
                    key={idx}
                    imgSrc={profile.imgSrc}
                    name={profile.name}
                    title={profile.title}
                    borderColor={idx % 2 === 0 ? '#fbbf24' : '#3b82f6 '}
                    textColor={idx % 2 === 0 ? '#f59e0b ' : '#1d4ed8 '}
                    />
                ))}
            </div>
            </div>

    </div>
  )
}

export default CorporateManagement
