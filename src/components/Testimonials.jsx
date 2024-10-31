import React, { useEffect, useState } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const Testimonials = ({ data }) => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveItem(id => (id + 1) % data.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [data]);

  return (
    <>
      <div className="w-full h-full relative px-10 lg:px-40 pb-20 bg-blue-950/75 backdrop-blur-sm">
      
      <div className='lg:gap-2 pt-10'>
        <div className='relative ' data-aos="fade-up">
                <h1 className='border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-black italic text-amber-400'> What Our Clients Say </h1>
                <p className='border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 lg:pt-1 text-sm lg:text-lg font-md text-white/70'>Real Stories of Success and Satisfaction</p>
        </div>
      </div>

        {/* Some space */}
        <div className="mb-16"></div>

        {/* Quote container along with person details */}
        <div className="relative mx-auto border-l-4 border-l-sky-500 bg-[#f7f7f7] px-10 lg:px-8 py-16 lg:py-14 text-center shadow-2xl rounded-sm">
          <div>
            <div className="mb-1 text-base lg:text-lg font-semibold text-blue-950">{data[activeItem].personName}</div>
            <div className="mb-3 text-xs lg:text-sm text-blue-900/75">{data[activeItem].profile}</div>
            <div className="mx-auto mb-4 w-16 h-1 bg-amber-400"></div>
            <div className="mb-1 text-left text-red-500">
            <FontAwesomeIcon 
                icon={['fas', 'quote-left']} 
                className={`mx-1.5 text-base lg-text-xl`} 
                />
            </div>
            <div className="text-black/40 font-medium text-xs lg:text-sm">{data[activeItem].quote}</div>
            <div className="flex flex-row justify-center text-blue-700 pt-2">
                <FontAwesomeIcon icon={['fas', 'star']} size='sm'/>
                <FontAwesomeIcon icon={['fas', 'star']} size='sm'/>
                <FontAwesomeIcon icon={['fas', 'star']} size='sm'/>
                <FontAwesomeIcon icon={['fas', 'star']} size='sm'/>
                <FontAwesomeIcon icon={['fas', 'star']} size='sm'/>
            </div>
          </div>

          {/* Person image */}
          <div className="absolute w-20 h-20 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 shadow-2xl mr-5 md:mr-0 ">
            <img src={data[activeItem].imageUrl} alt="profile" className="w-full h-full rounded-[inherit]" />
          </div>

          {/* Left button */}
          <button
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 aspect-square bg-blue-700 text-white font-bold rounded-full flex justify-center items-center hover:bg-blue-800 active:bg-blue-900 shadow-2xl transition"
            onClick={() => setActiveItem(Math.max(0, activeItem - 1))}
            title="Move to previous"
          >
            <FontAwesomeIcon 
                icon={['fas', 'chevron-left']} 
                className={`mx-1.5`} 
                size='xl' 
                />
          </button>

          {/* Right button */}
          <button
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 aspect-square bg-blue-700 text-white font-bold rounded-full flex justify-center items-center hover:bg-blue-800 active:bg-blue-900 shadow-2xl transition"
            onClick={() => setActiveItem(Math.min(data.length - 1, activeItem + 1))}
            title="Move to next"
          >
            <FontAwesomeIcon 
                icon={['fas', 'chevron-right']} 
                className={`mx-1.5`} 
                size='xl' 
                />
          </button>
        </div>

        {/* Item Indicator */}
        <div className="mx-auto mt-4 flex gap-2 w-fit">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-full cursor-pointer transition-all duration-500 ${
                activeItem === idx ? "w-5 h-2.5 bg-amber-400" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveItem(idx)}
              title={`Move to ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
