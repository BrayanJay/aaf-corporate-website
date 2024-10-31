import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CardsAbout = ({ stats }) => {  // Destructure stats from props
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center items-center px-5 lg:px-40 py-10 -mt-12 lg:-mt-24">
      <div className="relative w-full max-w-4xl flex shadow-md overflow-visible">
        {stats.map(({ stat, text, icon }, idx) => (
          <div
            key={idx}
            className={`flex-1 flex flex-col justify-center items-center p-5 sm:p-12
              ${idx % 2 === 0 ? 'bg-darkbluegradient' : 'bg-goldgradient'}
              transition transform ease-in-out duration-300
              ${hoveredIndex === idx ? 'scale-110 z-20' : 'scale-100 z-10'}
              ${idx === 0 ? 'rounded-l-xl' : ''} ${idx === stats.length - 1 ? 'rounded-r-xl' : ''}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ zIndex: hoveredIndex === idx ? 20 : 10 }}
          >
            <FontAwesomeIcon icon={icon} className="text-white text-xl md:text-2xl lg:text-4xl mb-3" />
            <div className="font-bold text-sm md:text-xl lg:text-3xl text-white">{stat}</div>
            <div className="mt-2 text-xs md:text-sm lg:text-base text-white uppercase text-center font-thin">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsAbout;
