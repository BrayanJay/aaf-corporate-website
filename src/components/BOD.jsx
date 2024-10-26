/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import goldellipse from '../assets/goldellipse.svg';
import blueellipse from '../assets/blueellipse.svg';

import mrPrasanth from '../assets/bod/vap.svg';
import mrRajiv from '../assets/bod/rja.svg';
import mrAlexandra from '../assets/bod/gm.svg';
import mrBijimon from '../assets/bod/kr.svg';
import mrPillai from '../assets/bod/kgk.svg';
import mrRajitha from '../assets/bod/rab.svg';
import mrJayasekara from '../assets/bod/jpdr.svg';
import mrRoshan from '../assets/bod/rds.svg';
import mrKumarasiri from '../assets/bod/tcd.svg';
import ProfileCard from './ProfileCard';

const BOD = () => {
  const boadOfDirectors = [
    { imgSrc: mrAlexandra, name: 'G. M. Alexander', title: 'Non - Executive Director' },
    { imgSrc: mrBijimon, name: 'K. R. Bijimon', title: 'Non - Executive Director / Chief General Manager - Muthoot Finance Ltd' },
    { imgSrc: mrPillai, name: 'K. G. K. Pillai', title: 'Non - Executive Director' },
    { imgSrc: mrRajitha, name: 'R. A. B. Basnayake', title: 'Independent Non - Executive Director' },
    { imgSrc: mrJayasekara, name: 'J. P. D. R. Jayasekara', title: 'Independent Non - Executive Director' },
    { imgSrc: mrRoshan, name: 'R. D. S. Gunasekara', title: 'Executive Director / Chief Operating Officer' },
    { imgSrc: mrKumarasiri, name: 'T. C. D. Kumarasiri', title: 'Non - Executive Director' },
  ];

  return (
    <div className="w-full h-auto flex flex-col">
      <div className='relative text-center pt-10 px-20' data-aos="fade-up">
                <h1 className='inline-block px-5 border-b-4 border-blue-500 text-4xl font-normal text-blue-900'> Board of <span className='font-black text-blue-700'> Directors </span></h1>
                <p className='pt-1 text-md font-light italic text-blue-500'>Guiding Our Vision with Expertise and Integrity</p>
                <p className='pb-5 pt-5 text-sm font-normal text-black/50 text-center'>Our Board of Directors comprises seasoned professionals with diverse backgrounds and extensive experience in the financial industry. Their leadership and strategic insights are instrumental in steering Asia Asset Finance towards sustainable growth and success.</p>
            </div>
      <div className="flex flex-row md:gap-40">
        <img src={goldellipse} className="h-72 md:h-96" />
        <div className="absolute pl-20">
          <img
            src={mrPrasanth}
            className="rounded-full h-36 md:h-52 mt-20 shadow-xl border-8 border-blue-500"
          />
        </div>

        <div className="flex basis-1/3">
          <div className="text-right pr-5 flex flex-col pt-20">
            <div className="text-6xl font-black text-blue-700 pr-5 border-r-4 border-blue-500">
              “ <span className="text-4xl font-black text-blue-700 pt-2">V. A. Prasanth</span>
            </div>
            <div className="text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
              Chairman
            </div>

            <div className="pt-5 text-sm font-medium text-black/40 pr-5 text-justify">
              V.A Prasanth is a commercial banker with over 37 years of all-round exposure in
              Retail & Corporate banking, Treasury Operations and Information Security. Formerly
              he worked with Indian Bank – acclaimed as one of the best...
              <span className="font-medium italic text-blue-500 hover:cursor-pointer hover:text-blue-900 transition transform ease-in-out duration-300">
                See more
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:gap-40 justify-end">
        <div className="flex basis-1/3">
          <div className="text-left pl-5 flex flex-col pt-20">
            <div className="text-6xl font-black text-amber-500 pl-5 border-l-4 border-amber-400">
              <span className="text-4xl font-black text-amber-500 pt-2">R.J. A. Gunawardena</span> ” 
            </div>
            <div className="text-xl font-black text-amber-400 pl-5 border-l-4 border-amber-400">
              Director / Chief Executive Officer
            </div>

            <div className="pt-5 text-sm font-medium text-black/40 pr-5 text-justify">
              Mr. Rajiv Gunawardena, the Chief Executive Officer / Director of Asia Asset Finance PLC was appointed to the Board in December 2009. A visionary leader, responsible for setting and implementing the organization’s vision...
              <span className="font-medium italic text-amber-400 hover:cursor-pointer hover:text-amber-500 transition transform ease-in-out duration-300">
                See more
              </span>
            </div>
          </div>
        </div>
        <img src={blueellipse} className="h-72 md:h-96" />
        <div className="absolute pr-20">
          <img
            src={mrRajiv}
            className="rounded-full h-36 md:h-52 mt-20 shadow-xl border-8 border-amber-400"
          />
        </div>
      </div>

      <div className="w-full h-auto flex justify-center">
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
  );
};

export default BOD;
