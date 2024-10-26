import { useState, useEffect } from 'react';
import banner1 from '../assets/bannerimg1.svg';
import banner2 from '../assets/bannerimg2.svg';
import banner3 from '../assets/bannerimg3.svg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const images = [
  {
    src: banner1,
    title: "Innovative Solutions for Your Financial Future",
    intro: "Empowering Your Financial Future",
    description: "At Asia Asset Finance, we believe in the power of innovation to drive financial success. Our commitment to providing tailored financial solutions has positioned us as a leader in the Sri Lankan finance industry. Whether you're looking to invest, save, or finance your next big project, we're here to support your journey with trust and transparency."
  },
  {
    src: banner2,
    title: "Where Dreams Meet Financial Solutions",
    intro: "Innovating Finance, Inspiring Growth",
    description: "We are more than just a financial institution; we are your partners in progress. Our innovative approach to finance is designed to empower individuals and businesses across Sri Lanka. By combining cutting-edge technology with personalized service, we deliver financial solutions that are not only efficient but also effective in helping you achieve your goals."
  },
  {
    src: banner3,
    title: "Leading the Way in Sri Lankan Finance",
    intro: "Your Trust, Your Commitment",
    description: "Trust and transparency are the cornerstones of our business. As a leader in Sri Lankan finance, we are committed to maintaining the highest standards of integrity in everything we do. From our first interaction to the final transaction, you can count on us to provide clear, honest advice and services that are tailored to your needs."
  }
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
      {/* Image slides with text */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for text */}
          <div className='flex flex-raw bg-black/30 relative h-full'>
          <div className="flex-col basis-1/2 "></div>
          <div className="flex flex-col relative basis-1/2 justify-center items-start p-8 h-full gap-2 md:gap-10">
            <h2 className="text-white text-lg md:text-xl font-semibold uppercase">{img.title}</h2>
            <h1 className=" border-l-8 border-blue-900 text-white text-4xl md:text-7xl font-bold uppercase pl-4">{img.intro}</h1>
            <p className="text-white text-xs md:text-md font-medium mt-2 mr-10">{img.description}</p>
          </div>
        </div>
        </div>
      ))}

      {/* Previous and Next buttons */}

      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-center hover:transition-all ease-in-out duration-1000 hover:bg-black/20 bg-opacity-50 rounded-full p-2">
      <FontAwesomeIcon 
                icon={['fas', 'chevron-left']} 
                className={`mx-1.5`} 
                size='2xl' 
                />
      </button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:transition-all ease-in-out duration-1000 hover:bg-black/20 bg-opacity-50 rounded-full p-2">
      <FontAwesomeIcon 
                icon={['fas', 'chevron-right']} 
                className={`mx-1.5`} 
                size='2xl' 
                />
      </button>

      {/* Dots/indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === idx ? 'bg-white' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
