import Carousel from '../components/Carousel';
import React from 'react';
import banner1 from '../assets/bannerimg1.svg';
import CardsAbout from '../components/CardsAbout';
import Description from '../components/Description';

import { faUsers, faBriefcase, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons'; // Import suitable icons
import MissionVisionGoal from '../components/MissionVisionGoal';
import BOD from '../components/BOD';
import CorporateManagement from '../components/CorporateManagement';
import BranchNetwork from '../components/BranchNetwork';

const image = {
  src: banner1,
  title: "About us",
  intro: "Empowering Your Financial Future ",
  specialnote: "since 1981",
  description: "“ Empowering People and Transforming Lives “",
};

const stats = [
  { stat: "50,000+", text: "Customers", icon: faUsers },
  { stat: "54+", text: "Years of Excellence", icon: faClock },
  { stat: "1000+", text: "Employees", icon: faBriefcase },
  { stat: "100+", text: "Branches", icon: faBuilding },
];

const AboutOverview = {
    title: "Overview",
    description: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies. Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka. Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business. The story of Asia Asset Finance PLC is one of “Empowering People and Transforming Lives”."
};



const AboutPage = () => {
  return (
    <div className="container mx-auto">
      <Carousel image={image} />
      <CardsAbout stats={stats}/>
      <Description title={AboutOverview.title} description={AboutOverview.description} />
      <MissionVisionGoal/>
      <BOD/>
      <CorporateManagement/>
      <BranchNetwork/>
    </div>
  );
};

export default AboutPage;
