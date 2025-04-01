import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from './ProfileCard'; // Re-usable Component

const CorporateManagement = () => {
  const { t, i18n } = useTranslation();
  const comTexts = t("comTextsAbout", { returnObjects: true });

  const [profileDetails, setProfileDetails] = useState([]); 
  const com_ids = [2, 9, 10, 11, 12, 13, 14, 15, 16, 17]; // ✅ Updated IDs

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const lang = i18n.language;
        const response = await axios.post(`http://localhost:3000/data/read/profiles`, {
          ids: com_ids,
          lang: lang
        });

        setProfileDetails(response.data || []); 
      } catch (error) {
        console.error("Error fetching corporate management profiles:", error);
        setProfileDetails([]); 
      }
    };

    fetchProfiles();
  }, [i18n.language]); 

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

      {/* Corporate Management Profiles */}
      <div className="w-full h-auto flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up">
          {profileDetails.map((profile, idx) => (
            <ProfileCard
              key={profile.id}
              id={profile.id}
              imgSrc={profile.profile_picture}
              name={profile.profile_name}
              title={profile.designation}
              borderColor={idx % 2 === 0 ? "#fbbf24" : "#3b82f6"}
              textColor={idx % 2 === 0 ? "#f59e0b" : "#1d4ed8"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateManagement;
