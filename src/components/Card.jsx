import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { useTranslation } from "react-i18next";

library.add(fas, fab, far);

const Card = () => {
  const { t } = useTranslation();
  const landingPageCards = t("landingPageCards", { returnObjects: true });

    const cards = [
        {
            idx: "card1",
            ic: <FontAwesomeIcon icon={['fas', 'user-group']} className={`mx-1.5 text-2xl md:text-4xl text-blue-700`} />,
            title: landingPageCards.card1_title,
            description: landingPageCards.card1_description
        },
        {
            idx: "card2",
            ic: <FontAwesomeIcon icon={['fas', 'globe']} className={`mx-1.5 text-2xl md:text-4xl text-blue-700`} />,
            title: landingPageCards.card2_title,
            description: landingPageCards.card2_description
        },
        {
            idx: "card3",
            ic: <FontAwesomeIcon icon={['fas', 'clock']} className={`mx-1.5  text-2xl md:text-4xl text-blue-700`} />,
            title: landingPageCards.card3_title,
            description: landingPageCards.card3_description
        }
    ];

    return (
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card) => (
          <div
            key={card.idx}
            className="w-48 sm:w-96 md:h-80 px-12 pt-5 pb-10 bg-[#f6fcff] rounded-tl-2xl rounded-br-2xl shadow-lg flex-col justify-center items-center gap-5 inline-flex hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105"
          >
            <div className="justify-center items-center flex">
              {card.ic}
            </div>
            <div className="w-48 sm:w-96 md:w-96 text-center px-2 text-blue-900/80 text-lg md:text-2xl font-bold">
              {card.title}
            </div>
            <div className="hidden md:block w-48 sm:w-96 md::w-96 px-10 text-center text-black/40 text-xs md:text-base font-medium">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    );
};

export default Card;
