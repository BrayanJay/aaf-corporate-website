import Carousel from '../components/Carousel';
import CardsAbout from '../components/CardsAbout';
import Description from '../components/Description';
import { useTranslation } from "react-i18next";


import MissionVisionGoal from '../components/MissionVisionGoal';
import BOD from '../components/BOD';
import CorporateManagement from '../components/CorporateManagement';
//import BranchNetwork from '../components/BranchNetwork';
import BranchNetworkTemp from '../components/BranchNetworkTemp';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const { t } = useTranslation();
  const bannerDetails = t("bannerAbout", { returnObjects: true });
  const stats = t("cardsAbout", { returnObjects: true });
  const AboutOverview = t("overviewAbout", { returnObjects: true });

  return (
    <div id='top' className="container mx-auto w-full">
      <Helmet>
        <title>Asia Asset Finance PLC | About</title>
        <meta name="description" content="Discover Asia Asset Finance, a trusted financial partner in Sri Lanka with 54+ years of excellence. Serving 70,000+ customers with innovative solutions like Gold Loans, Fixed Deposits, Leasing, and more. Learn about our journey and commitment to your financial success!" />
        <link rel="canonical" href="https://www.asiaassetfinance.com/about" />
      </Helmet>
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
