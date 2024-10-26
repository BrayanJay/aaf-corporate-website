import React, { useState } from 'react';

const MissionVisionGoal = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: "Towards the Customers",
      description: "The solutions we provide for our customers' financial needs would be unconventional, innovative, and relevant for their needs to improve their quality of life whilst maintaining superior levels of customer service which would go well beyond their expectations."
    },
    vision: {
      title: "Towards the Shareholders",
      description: "Build shareholder value and provide substantial shareholder returns through relentlessly improving our performance and operations with sustainable effective strategies."
    },
    goal: {
      title: "Towards our Family of Employees",
      description: "A Company that fosters and harnesses equality amongst employees along with personnel development and to create the perfect work-life balance in the organization."
    }
  };

  return (
    <div className="pl-40 pr-20 py-10 bg-black/30 shadow justify-end items-center gap-40 inline-flex">
      <div className="flex-col justify-start items-start flex gap-5">
        <div
          onClick={() => setActiveTab('mission')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'mission' ? 'border-l-4 border-amber-400' : ''}`}
        >
          <div className="text-white text-2xl sm:text-4xl font-black">MISSION</div>
        </div>
        <div
          onClick={() => setActiveTab('vision')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'vision' ? 'border-l-4 border-amber-400' : ''}`}
        >
          <div className="text-white text-2xl sm:text-4xl font-black">VISION</div>
        </div>
        <div
          onClick={() => setActiveTab('goal')}
          className={`px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer ${activeTab === 'goal' ? 'border-l-4 border-amber-400' : ''}`}
        >
          <div className="text-white text-2xl sm:text-4xl font-black font-['Roboto']">GOAL</div>
        </div>
      </div>
      <div className="flex-col justify-center items-start gap-2.5 inline-flex">
        <div className="text-white text-2xl sm:text-4xl font-bold">{tabContent[activeTab].title}</div>
        <div className="self-stretch text-white text-sm sm:text-lg font-normal">{tabContent[activeTab].description}</div>
      </div>
    </div>
  );
}

export default MissionVisionGoal;
