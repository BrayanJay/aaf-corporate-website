import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import ProfileCard from './ProfileCard'; // Re-usable component
import { useEffect, useState } from "react";
import axios from "axios";

const BOD = () => {
  const { t, i18n } = useTranslation();
  const bodTexts = t("bodTextsAbout", { returnObjects: true });
  
  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [profileDetails, setProfileDetails] = useState([]);  // Initialize as empty array

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile/getProfiles/bod`);
        //console.log(response.data); // Log the response to check the data
        setProfileDetails(response.data || []);  // Ensure response is an array
      } catch (error) {
        console.error("Error fetching product data:", error);
        setProfileDetails([]);  // In case of an error, set as empty array
      }
    };

    fetchProductData();
  }, [i18n.language]); // Re-fetch on language change

  // Check if profileDetails is an array before using .filter
  if (profileDetails.length === 0) return <p>Loading...</p>;

  const chairman = profileDetails.find((profile) => profile.id === 1); // Chairman with ID 1
  const ceo = profileDetails.find((profile) => profile.id === 2); // CEO with ID 2

  return (
    <div className="w-full h-auto flex flex-col overflow-hidden">
      {/* header Section */}
      <div className='relative text-center pt-5 lg:pt-10 px-10 lg:px-20'>
        <h1 className='inline-block px-5 border-b-2 lg:border-b-4 border-blue-500 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900' data-aos="fade-up">
          {bodTexts.title1} <span className='font-black text-blue-700'> {bodTexts.title2} </span>
        </h1>
        <h2 className='pt-1 text-xs md:text-sm lg:text-lg font-medium italic text-blue-500' data-aos="fade-up">{bodTexts.subtitle}</h2>
        <p className='pb-5 pt-5 text-xs lg:text-sm font-normal text-black/50 text-center' data-aos="fade-up" data-aos-delay="300">{bodTexts.intro}</p>
      </div>

      {/* Chairman Section */}
      <div className="flex flex-row md:gap-40" data-aos="fade-right">
        <img src={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/goldellipse.webp`} className="h-72 md:h-96" />
        <div className="absolute pl-10 sm:pl-20">
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/bod/1.webp`}  // Fallback if missing
            className="rounded-full h-32 md:h-52 mt-20 shadow-xl border-4 md:border-8 border-blue-500"
            alt="Chairman of Asia Asset Finance PLC, Mr. V A Prasanth"
          />

        </div>
        <div className="flex md:basis-1/3">
          <div className="text-right pl-10 sm:pl-20 md:pl-0 pr-5 flex flex-col pt-20">
            <div className="text-4xl md:text-6xl font-black text-blue-700 pr-5 border-r-4 border-blue-500">
              <span className='hidden lg:block'>“ </span>
              <span className="text-xl md:text-2xl lg:text-4xl font-black text-blue-700 pt-2">
                {i18n.language === 'en' ? chairman.name_en : i18n.language === 'si' ? chairman.name_si : chairman.name_ta}
              </span>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
              {i18n.language === 'en' ? chairman.designation_en : i18n.language === 'si' ? chairman.designation_si : chairman.designation_ta}
            </div>
            <div className="pt-5 text-xs md:text-sm font-medium text-black/40 pr-5 text-justify">
              <span className='hidden lg:block text-left'>
                {
                chairman?.[`description_${i18n.language}`] && Array.isArray(chairman?.[`description_${i18n.language}`]) 
                  ? chairman[`description_${i18n.language}`].join(', ').slice(0,350)+"..."
                  : (typeof chairman?.[`description_${i18n.language}`] === 'string' ? chairman?.[`description_${i18n.language}`]?.slice(0,350)+"..." : '')}
              </span>
              <Link to={`/profile/bod/1`} onClick={scrolltoTop}>
                <span className="hidden lg:block font-medium italic text-blue-500 hover:cursor-pointer hover:text-blue-600 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.view_profile_btn}
                </span>
              </Link>
              <Link to={`/profile/bod/1`} onClick={scrolltoTop}>
                <span className="lg:hidden font-medium italic text-blue-500 hover:cursor-pointer hover:text-blue-600 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.view_profile_btn}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="flex flex-row md:gap-40 justify-end" data-aos="fade-left">
        <div className="flex md:basis-1/3">
          <div className="text-left pl-5 pr-10 sm:pr-20 md:pr-0 flex flex-col pt-20">
            <div className="text-4xl md:text-6xl font-black text-amber-500 pl-5 border-l-4 border-amber-400">
              <span className="text-xl md:text-2xl lg:text-4xl font-black text-amber-500 pt-2">{ceo?.[`name_${i18n.language}`]}</span>
              <span className='hidden lg:block'> ”</span>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-amber-400 pl-5 border-l-4 border-amber-400">
              {ceo?.[`designation_${i18n.language}`]}
            </div>
            <div className="pt-5 text-xs md:text-sm font-medium text-black/40 pr-5 text-justify">
              <span className='hidden lg:block'>
                {ceo?.[`description_${i18n.language}`] && Array.isArray(ceo?.[`description_${i18n.language}`]) 
                  ? ceo[`description_${i18n.language}`].join(', ').slice(0,350)+"..."
                  : (typeof ceo?.[`description_${i18n.language}`] === 'string' ? ceo?.[`description_${i18n.language}`]?.slice(0,350)+"..." : '')}
              </span>
              <Link to={`/profile/bod/2`} onClick={scrolltoTop}>
                <span className="hidden lg:block font-medium italic text-amber-400 hover:cursor-pointer hover:text-amber-500 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.see_more_btn}
                </span>
              </Link>
              <Link to={`/profile/bod/2`} onClick={scrolltoTop}>
                <span className="lg:hidden font-medium italic text-amber-400 hover:cursor-pointer hover:text-amber-500 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.view_profile_btn}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <img src={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/blueellipse.webp`} className="h-72 md:h-96" />
        <div className="absolute pr-10 sm:pr-20">
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/bod/2.webp`}  // Fallback if missing
            className="rounded-full h-32 md:h-52 mt-20 shadow-xl border-4 md:border-8 border-amber-400"
            alt="CEO of Asia Asset Finance PLC, Mr. R J A Gunawardena"
          />
        </div>
      </div>

      {/* Profile Cards Grid */}
      <div className="w-full h-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up">
          
          {profileDetails.filter((profile) => profile.id > 2).map((profile) => (
            <ProfileCard
              key={profile.id}
              profileId={profile.id}
              profileName={profile?.[`name_${i18n.language}`]}
              profilePicture={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/bod/${profile.profile_picture}.webp`}
              designation={profile?.[`designation_${i18n.language}`]}
              description={profile?.[`description_${i18n.language}`]}
              borderColor={profile.id % 2 === 0 ? '#fbbf24' : '#3b82f6'}
              textColor={profile.id % 2 === 0 ? '#f59e0b' : '#1d4ed8'}
              type="bod"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BOD;
