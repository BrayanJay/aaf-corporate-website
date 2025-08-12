import { useTranslation } from "react-i18next";
import ProfileCard from './ProfileCard';
import { useEffect, useState } from "react";
import axios from "axios";

const CorporateManagement = () => {
  const { t, i18n } = useTranslation();
  const comTexts = t("comTextsAbout", { returnObjects: true });

  const [profileDetails, setProfileDetails] = useState([]);  // Initialize as empty array
  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile/getProfiles/coop`);
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

  return (
    <div id="main-container" className="w-full h-full relative px-10 lg:px-20 gap-2 pt-10">
      {/* Header Section */}
      <div className="relative" data-aos="fade-up">
        <h1 className="border-r-4 lg:border-r-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900 text-right">
          {comTexts.title1} <span className="font-black text-blue-700">{comTexts.title2}</span>
        </h1>
        <h2 className="border-r-4 lg:border-r-8 border-blue-500 px-5 md:pt-1 text-xs md:text-sm lg:text-xl font-medium italic text-blue-500 text-right">
          {comTexts.subtitle}
        </h2>
        <p className="py-5 text-xs lg:text-sm font-normal text-black/50 text-justify">
          {comTexts.description}
        </p>
      </div>

      {/* Profile Cards Grid */}
      <div className="w-full h-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up">
          
          {profileDetails.map((profile) => (
            <ProfileCard
              key={profile.id}
              profileId={profile.id}
              profileName={profile?.[`name_${i18n.language}`]}
              profilePicture={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/coop/${profile.profile_picture}.webp`}
              designation={profile?.[`designation_${i18n.language}`]}
              description={profile?.[`description_${i18n.language}`]}
              borderColor={profile.id % 2 === 0 ? '#fbbf24' : '#3b82f6'}
              textColor={profile.id % 2 === 0 ? '#f59e0b' : '#1d4ed8'}
              type="coop"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateManagement;
