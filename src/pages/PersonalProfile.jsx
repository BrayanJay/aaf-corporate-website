import React from 'react'
import vap from '../assets/bod/vap.svg'
import ProfileCard from '../components/ProfileCard'

import mrPrasanth from '../assets/bod/vap.svg';
import mrRajiv from '../assets/bod/rja.svg';
import mrAlexandra from '../assets/bod/gm.svg';
import mrBijimon from '../assets/bod/kr.svg';
import mrPillai from '../assets/bod/kgk.svg';
import mrRajitha from '../assets/bod/rab.svg';
import mrJayasekara from '../assets/bod/jpdr.svg';
import mrRoshan from '../assets/bod/rds.svg';
import mrKumarasiri from '../assets/bod/tcd.svg';

const person = [
    {name: "V. A. Prasanth",
    src: vap,
    title: "Chairman",
    description : ["line1",
                    "line2",
                    "line3"
    ]
    }
]

const boadOfDirectors = [
  { imgSrc: mrAlexandra, name: 'G. M. Alexander', title: 'Non - Executive Director' },
  { imgSrc: mrBijimon, name: 'K. R. Bijimon', title: 'Non - Executive Director / Chief General Manager - Muthoot Finance Ltd' },
  { imgSrc: mrPillai, name: 'K. G. K. Pillai', title: 'Non - Executive Director' },
  { imgSrc: mrRajitha, name: 'R. A. B. Basnayake', title: 'Independent Non - Executive Director' },
];

const PersonalProfile = () => {
  return (
    <div className='px-10 lg:px-40 py-10 lg:py-20'>
        <div className='md:grid md:grid-flow-row md:grid-cols-4'>
            <div className=''>
                <img className='rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-blue-900/80 drop-shadow-2xl' src={vap}/>
            </div>

            <div className='text-end md:col-span-3'>
            <div>
            <div className="text-4xl md:text-6xl font-black text-blue-700 pr-5 border-r-4 border-blue-500">
              “ <span className="text-xl md:text-2xl lg:text-4xl font-black text-blue-700 pt-2">V. A. Prasanth</span>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
              Chairman
            </div>
            </div>
            <div className='flex flex-col text-sm font-medium py-5 gap-y-5 text-black/50 pl-10'>
                <span>V.A Prasanth is a commercial banker with over 37 years of all-round exposure in Retail & Corporate banking, Treasury Operations and Information Security. Formerly he worked with Indian Bank – acclaimed as one of the best performing Public Sector Banks in India – as General Manager and Chief Information Officer. During this time, he was in-charge of Information Technology and Digital Banking. V.A Prasanth was also appointed as the Chief Financial Officer at Indian Bank, and further served as the Zonal Manager in two prominent zones of the Bank.</span>
                <span>He has over two decades of experience in Financial Markets – Headed the Forex Dealing Room at Mumbai during 1994-1998, the Head of Singapore Treasury during 2001-2005, Head of Treasury Back Office during 2009-2011, and also the Administrator of Wealth Management Services for Indian Bank (WMS) between 2009 and 2011.</span>
                <span>V.A Prasanth is presently associated with the Institute for Development and Research in Banking Technology (IDRBT), Hyderabad, as Senior Domain Expert. He was appointed as the Chairman of Asia Asset Finance in June 2020.</span>
            </div>
            </div>

        </div>
        <div className="w-full h-auto flex justify-center pt-20">
        {/* Grid Layout for Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch">
          {boadOfDirectors.map((profile, idx) => (
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

export default PersonalProfile
