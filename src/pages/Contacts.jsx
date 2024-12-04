import React from 'react';
import contactImg from '../media/contactPage.webp';
import InquiriesForm from '../components/InquiriesForm';
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const data = t("contactsPage", { returnObjects: true });
  return (
    <div>
    <div className="flex flex-col lg:flex-row px-10 lg:px-20 justify-between">
      {/* Left Content */}
      <div className="flex-1 relative py-10 flex flex-col gap-5">
        <div data-aos="fade-up">
          <h1 className="border-l-4 lg:border-l-8 border-blue-500 p-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
            <span className="font-bold text-amber-400">{data.title1} </span>{data.title2} 
          </h1>
          <p className="border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 pb-5 text-xs md:text-sm lg:text-lg font-semibold text-stone-500">
          {data.subtitle} 
          </p>
        </div>
        <div className="flex flex-col py-5 gap-5">

          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2" data-aos="fade-up" data-aos-delay="100">
            <span className="font-bold text-sm md:text-base lg:text-lg">{data.card1title}</span>
            <br /> {data.card1Body}
          </div>

          <a href='tell://+94117170712'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2" data-aos="fade-up" data-aos-delay="200">
            <span className="font-bold text-sm md:text-base lg:text-lg">{data.card2title}</span>
            <br /> {data.card2Body}
          </div>
          </a>

          <a href='tell://+94777999922'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2" data-aos="fade-up" data-aos-delay="200">
            <span className="font-bold text-sm md:text-base lg:text-lg">{data.card5title}</span>
            <br /> {data.card5Body}
          </div>
          </a>

          <a href='fax://+94117699000'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2" data-aos="fade-up" data-aos-delay="300">
            <span className="font-bold text-sm md:text-base lg:text-lg">{data.card3title}</span>
            <br /> {data.card3Body}
          </div>
          </a>

          <a href='mailto://info@asiaassetfinance.lk'>
          <div className="bg-bluegradient hover:bg-darkbluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2" data-aos="fade-up" data-aos-delay="400">
            <span className="font-bold text-sm md:text-base lg:text-lg">{data.card4title}</span>
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
    <InquiriesForm/>
    </div>
  );
};

export default Contacts;
