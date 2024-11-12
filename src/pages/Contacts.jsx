import React from 'react';
import contactImg from '../assets/contacts.svg';
import InquiriesForm from '../components/InquiriesForm';

const Contacts = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row px-10 lg:px-40">
      {/* Left Content */}
      <div className="flex-1 relative py-10 flex flex-col justify-between gap-5" data-aos="fade-up">
        <div>
          <h1 className="border-l-4 lg:border-l-8 border-blue-500 p-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
            <span className="font-bold text-amber-400">Contact </span>Us
          </h1>
          <p className="border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 pb-5 text-xs md:text-sm lg:text-lg font-semibold text-stone-500">
            Experience seamless and secure financial services right from your smartphone.{' '}
            <span className="font-medium italic underline hover:cursor-pointer text-blue-900">Learn More</span>
          </p>
        </div>
        <div className="flex flex-col py-5 gap-5">
          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2">
            <span className="font-bold text-sm md:text-base lg:text-lg">Head Office</span>
            <br /> No 76, Park St, Colombo 02
          </div>
          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2">
            <span className="font-bold text-sm md:text-base lg:text-lg">Hotline</span>
            <br /> 011 769 9000
          </div>
          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2">
            <span className="font-bold text-sm md:text-base lg:text-lg">Fax</span>
            <br /> 011 769 9000
          </div>
          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs md:text-sm lg:text-base text-white font-extralight py-2">
            <span className="font-bold text-sm md:text-base lg:text-lg">Email</span>
            <br /> info@asiaassetfinance.lk
          </div>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 hidden lg:flex items-center justify-center lg:pl-10">
        <img className="w-full h-full object-contain max-h-full" src={contactImg} alt="Contact Us" />
      </div>
    </div>
    <InquiriesForm/>
    </div>
  );
};

export default Contacts;
