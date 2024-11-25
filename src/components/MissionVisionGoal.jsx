import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


const MissionVisionGoal = () => {
  const { t } = useTranslation();
  const missionVisionGoal = t("missionVisionGoal", { returnObjects: true });

  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="px-10 lg:px-40 py-10 bg-black/30 shadow justify-end items-center gap-10 lg:gap-40 inline-flex" data-aos="fade-up">
      <div className="flex-col justify-start items-start flex gap-5">
        <div
          onClick={() => setActiveTab('mission')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'mission' ? 'border-l-4 border-amber-400' : ''}`}

        >
          <div className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.mission.category}</div>
        </div>
        <div
          onClick={() => setActiveTab('vision')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'vision' ? 'border-l-4 border-amber-400' : ''}`}

        >
          <div className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.vision.category}</div>
        </div>
        <div
          onClick={() => setActiveTab('goal')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'goal' ? 'border-l-4 border-amber-400' : ''}`}

        >
          <div className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.goal.category}</div>
        </div>
      </div>
      <div className="flex-col justify-center items-start gap-2.5 inline-flex">
        <div className="text-white text-xl md:text-2xl lg:text-4xl font-bold">{missionVisionGoal[activeTab].title}</div>
        <div className="self-stretch text-white text-xs md:text-sm lg:text-lg font-normal">{missionVisionGoal[activeTab].description}</div>
      </div>
    </div>
  );
}

export default MissionVisionGoal;
