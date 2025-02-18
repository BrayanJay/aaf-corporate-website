import contactImg from '../media/contactPage/contactPage.webp';
import InquiriesForm from '../components/InquiriesForm';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import ComplaintForm from '../components/ComplaintForm';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Contacts = ({formType = 'inquiry'}) => {
  const { t } = useTranslation();
  const data = t("contactsPage", { returnObjects: true });
  const formData = t("inquiryForm", { returnObjects: true });
  
  const [activeTab, setActiveTab] = useState(formType);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'inquiry':
        return <InquiriesForm />;
      case 'complaint':
        return <ComplaintForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* G Tagging sources */}
    <Helmet>
        <title>Contact Us – Asia Asset Finance</title>
        <meta name="description" content="Reach out for inquiries, loan details, and more. Our friendly team is ready to assist you." />
        <meta name="keywords" content="Finance Support"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/contacts" />
      </Helmet>

    <div className="flex flex-col lg:flex-row px-10 lg:px-20 justify-between">
      {/* Left Content */}
      <div className="flex-1 relative py-10 flex flex-col gap-2">
        <div data-aos="fade-up">
          <h1 className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
            <span className="font-bold text-amber-400">{data.title1} </span>{data.title2} 
          </h1>
          <h2 className="border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 pb-5 text-xs md:text-sm lg:text-lg font-semibold text-stone-500">
          {data.subtitle} 
          </h2>
        </div>
        <div className="flex flex-col py-5 gap-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">

          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm text-white font-extralight py-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">{data.card1title}</h3>
            <br /> {data.card1Body}
          </div>

          <a href="tel:+94117699000" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm text-white font-extralight py-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">{data.card3title}</h3>
            <br /> {data.card3Body}
          </div>
          </a>

          <a href="tel:+94117170712" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm text-white font-extralight py-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">{data.card2title}</h3>
            <br /> {data.card2Body}
          </div>
          </a>

          <a href="tel:+94777999922" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm text-white font-extralight py-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">{data.card5title}</h3>
            <br /> {data.card5Body}
          </div>
          </a>

          <a href="tel:1369" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm text-white font-extralight py-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">{data.card6title}</h3>
            <br /> {data.card6Body}
          </div>
          </a>

          <a href='mailto:info@asiaassetfinance.lk'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm text-white font-extralight py-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">{data.card4title}</h3>
            <br /> {data.card4Body}
          </div>
          </a>

        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 hidden lg:flex items-center justify-center lg:pl-10" data-aos="fade-in">
        <img className="w-full h-[80vh] object-contain max-h-full" src={contactImg} alt="Contact Us" />
      </div>
    </div>

    <div id='complaint-form' className="container mx-auto py-8 px-4 mt-20" data-aos="fade-up">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-tl-md rounded-br-md ${
            activeTab === 'inquiry'
              ? 'bg-bluegradient text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('inquiry')}
          aria-label='Switch to Inquiry Form'
        >
          {formData.inquiry}
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-tl-md rounded-br-md ${
            activeTab === 'complaint'
              ? 'bg-bluegradient text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('complaint')}
          aria-label='Switch to Complaints Form'
        >
          {formData.cus_complaint}
        </button>
      </div>
      <div className="content">
        {renderActiveTab()}
      </div>
    </div>

    </div>
  );
};

Contacts.propTypes = {
  formType: PropTypes.oneOf(['inquiry', 'complaint'])
};

export default Contacts;
