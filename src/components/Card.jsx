import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);

import React from 'react';

const Card = () => {
    const cards = [
        {
            idx: "card1",
            ic: <FontAwesomeIcon icon={['fas', 'user-group']} className={`mx-1.5 text-2xl md:text-4xl`} />,
            title: "Expert Team",
            description: "Leverage the knowledge and experience of our financial experts dedicated to helping you succeed."
        },
        {
            idx: "card2",
            ic: <FontAwesomeIcon icon={['fas', 'globe']} className={`mx-1.5 text-2xl md:text-4xl`} />,
            title: "Global Reach",
            description: "We provide services across the globe, ensuring you get financial expertise wherever you are."
        },
        {
            idx: "card3",
            ic: <FontAwesomeIcon icon={['fas', 'clock']} className={`mx-1.5  text-2xl md:text-4xl`} />,
            title: "24/7 Support",
            description: "Our team is available around the clock to provide you with exceptional customer support."
        }
    ];

    return (
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card) => (
          <div
            key={card.idx}
            className="w-96 h-80 px-12 pt-5 pb-10 bg-[#f6fcff] rounded-tl-2xl rounded-br-2xl shadow-lg flex-col justify-center items-center gap-5 inline-flex hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105"
          >
            <div className="justify-center items-center flex">
              {card.ic}
            </div>
            <div className="w-96 text-center text-blue-900/80 text-2xl font-bold">
              {card.title}
            </div>
            <div className="w-96 px-10 text-center text-black/40 text-base font-medium">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    );
};

export default Card;
