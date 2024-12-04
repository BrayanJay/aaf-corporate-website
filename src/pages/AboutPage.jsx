import Carousel from '../components/Carousel';
import React from 'react';
import CardsAbout from '../components/CardsAbout';
import Description from '../components/Description';
import { useTranslation } from "react-i18next";


import MissionVisionGoal from '../components/MissionVisionGoal';
import BOD from '../components/BOD';
import CorporateManagement from '../components/CorporateManagement';
//import BranchNetwork from '../components/BranchNetwork';
import BranchNetworkTemp from '../components/BranchNetworkTemp';

const AboutPage = () => {
  const { t } = useTranslation();
  const bannerDetails = t("bannerAbout", { returnObjects: true });
  const stats = t("cardsAbout", { returnObjects: true });
  const AboutOverview = t("overviewAbout", { returnObjects: true });

  return (
    <div className="container mx-auto w-full">
      <Carousel image={bannerDetails}/>
      <CardsAbout stats={stats}/>
      <Description title={AboutOverview.title} description={AboutOverview.description}/>
      <div id='mission-vision-goal' className='bg-white pt-20'>
      <MissionVisionGoal/>
      </div>
      <div id='bod' className='bg-white py-12'>
      <BOD/>
      </div>
      <div id='corporate-management' className='bg-white pt-12'>
      <CorporateManagement/>
      </div>
      <div id='branches' className='bg-white pt-12'>
      {/*<BranchNetwork/>*/}
      <BranchNetworkTemp/>
      </div>
    </div>
  );
};

export default AboutPage;
