import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const MissionVisionGoal = () => {
  const { t } = useTranslation();
  const missionVisionGoal = t("missionVisionGoal", { returnObjects: true });

  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div
      className="bg-mvgImg h-72 lg:h-96 px-10 lg:px-40 w-full py-10 shadow justify-start items-center gap-10 lg:gap-40 inline-flex relative bg-cover bg-bottom"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative flex-col justify-start items-start flex gap-5 z-10">
        
        <div
          onClick={() => setActiveTab('vision')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'vision' ? 'border-l-4 border-amber-400' : ''}`}
        >
          <div className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.vision.category}</div>
        </div>
        <div
          onClick={() => setActiveTab('mission')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'mission' ? 'border-l-4 border-amber-400' : ''}`}
        >
          <div className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.mission.category}</div>
        </div>
        <div
          onClick={() => setActiveTab('goal')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'goal' ? 'border-l-4 border-amber-400' : ''}`}
        >
          <div className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.goal.category}</div>
        </div>
      </div>
      <div className="relative flex-col justify-center items-start gap-2.5 inline-flex z-10">
        <div className="text-white text-xl md:text-2xl lg:text-4xl font-bold">{missionVisionGoal[activeTab].title}</div>
        <div className="self-stretch text-white text-xs md:text-sm lg:text-lg font-bold">{missionVisionGoal[activeTab].description}</div>
      </div>
    </div>
  );
};

export default MissionVisionGoal;
