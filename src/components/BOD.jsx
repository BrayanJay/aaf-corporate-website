/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { useTranslation } from "react-i18next";

import goldellipse from '../assets/goldellipse.svg';
import blueellipse from '../assets/blueellipse.svg';

import mrPrasanth from '../assets/bod/vap.svg';
import mrRajiv from '../assets/bod/rja.svg';
import ProfileCard from './ProfileCard';

const BOD = () => {
  const { t } = useTranslation();
  const profileDetails = t("bodProfilesAbout", { returnObjects: true });
  const bodTexts = t("bodTextsAbout", { returnObjects: true });

  

  return (
    <div className="w-full h-auto flex flex-col">
      <div className='relative text-center pt-5 lg:pt-10 px-10 lg:px-20'>
                <h1 className='inline-block px-5 border-b-2 lg:border-b-4 border-blue-500 text-xl md:text-2xl lg:text-4xl font-normal text-blue-900' data-aos="fade-up"> {bodTexts.title1} <span className='font-black text-blue-700'> {bodTexts.title2} </span></h1>
                <p className='pt-1 text-xs md:text-sm lg:text-lg font-light italic text-blue-500' data-aos="fade-up">{bodTexts.subtitle}</p>
                <p className='pb-5 pt-5 text-xs lg:text-sm font-normal text-black/50 text-center' data-aos="fade-up" data-aos-delay	="300">{bodTexts.intro}</p>
            </div>
      <div className="flex flex-row md:gap-40" data-aos="fade-right">
        <img src={goldellipse} className="h-72 md:h-96"/>
        <div className="absolute pl-20">
          <img
            src={mrPrasanth}
            className="rounded-full h-32 md:h-52 mt-20 shadow-xl border-4 md:border-8 border-blue-500"
          />
        </div>

        <div className="flex md:basis-1/3">
          <div className="text-right pl-20 md:pl-0 pr-5 flex flex-col pt-20">
            <div className="text-4xl md:text-6xl font-black text-blue-700 pr-5 border-r-4 border-blue-500">
              “ <span className="text-xl md:text-2xl lg:text-4xl font-black text-blue-700 pt-2">{bodTexts.chairman_name}</span>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
            {bodTexts.chairman_position}
            </div>

            <div className="pt-5 text-xs md:text-sm font-medium text-black/40 pr-5 text-justify">
            {bodTexts.chairman_description}
              <span className="font-medium italic text-blue-500 hover:cursor-pointer hover:text-blue-900 transition transform ease-in-out duration-300">
              {bodTexts.see_more_btn}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:gap-40 justify-end" data-aos="fade-left">
        <div className="flex md:basis-1/3">
          <div className="text-left pl-5 pr-20 md:pr-0 flex flex-col pt-20">
            <div className="text-4xl md:text-6xl font-black text-amber-500 pl-5 border-l-4 border-amber-400">
              <span className="text-xl md:text-2xl lg:text-4xl font-black text-amber-500 pt-2">{bodTexts.ceo_name}</span> ” 
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-amber-400 pl-5 border-l-4 border-amber-400">
            {bodTexts.ceo_position}
            </div>

            <div className="pt-5 text-xs md:text-sm font-medium text-black/40 pr-5 text-justify">
            {bodTexts.ceo_description}
              <span className="font-medium italic text-amber-400 hover:cursor-pointer hover:text-amber-500 transition transform ease-in-out duration-300">
              {bodTexts.see_more_btn}
              </span>
            </div>
          </div>
        </div>
        <img src={blueellipse} className="h-72 md:h-96" />
        <div className="absolute pr-20">
          <img
            src={mrRajiv}
            className="rounded-full h-32 md:h-52 mt-20 shadow-xl border-4 md:border-8 border-amber-400"
          />
        </div>
      </div>

      <div className="w-full h-auto flex justify-center">
        {/* Grid Layout for Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up">
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
  );
};

export default BOD;
