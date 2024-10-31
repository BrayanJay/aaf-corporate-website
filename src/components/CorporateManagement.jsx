import React from 'react'

import mrRajiv from '../assets/bod/rja.svg';
import mrRoshan from '../assets/bod/rds.svg';
import mrThiru from '../assets/bod/gm.svg';
import mrMahesh from '../assets/bod/gm.svg';
import mrJayantha from '../assets/bod/gm.svg';
import mrSameera from '../assets/bod/gm.svg';
import msGeethika from '../assets/bod/gm.svg';
import mrSajith from '../assets/bod/gm.svg';
import mrInditha from '../assets/bod/gm.svg';
import mrPraveen from '../assets/bod/gm.svg';
import ProfileCard from './ProfileCard';

const CorporateManagement = () => {

    const corporateManagement = [
        { imgSrc: mrRajiv, name: 'Rajiv Gunawardena', title: 'Director / Chief Executive Officer' },
        { imgSrc: mrRoshan, name: 'Roshan Gunasekara', title: 'Executive Director / Chief Operating Officer' },
        { imgSrc: mrThiru, name: 'M. Thiruneelakandan', title: 'General Manager' },
        { imgSrc: mrMahesh, name: 'Mahesh Kumar', title: 'Deputy General Manager - Credit' },
        { imgSrc: mrJayantha, name: 'Jayantha Weerapullige', title: 'Deputy General Manager - Marketing' },
        { imgSrc: mrSameera, name: 'Sameera Weveladeniya', title: 'Deputy General Manager - Fixed Deposits' },
        { imgSrc: msGeethika, name: 'Geethika Elwalage', title: 'Deputy General Manager - Finance' },
        { imgSrc: mrSajith, name: 'Sajith Atapattu', title: 'Deputy General Manager - Risk' },
        { imgSrc: mrInditha, name: 'Inditha Jayathilaka', title: 'Deputy General Manager - IT' },
        { imgSrc: mrPraveen, name: 'Praveen Peiris', title: 'Deputy General Manager - Treasury' },
        
      ]

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
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center md:justify-items-stretch">
                {corporateManagement.map((profile, idx) => (
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
