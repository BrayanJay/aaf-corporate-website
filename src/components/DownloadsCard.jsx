import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTranslation } from "react-i18next";

const DownloadsCard = () => {
    const { t } = useTranslation();
    const cards = t("downloadsData", { returnObjects: true });

  return (
    <div className="flex flex-wrap gap-6 justify-start">
        {cards.map((card) => (
          <div
            key={card.idx}
            className="p-5 lg:p-10 bg-[#f6fcff] rounded-tl-2xl rounded-br-2xl shadow-lg flex-col justify-center items-center gap-5 inline-flex hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
          >
            <div className="justify-center items-center flex">
                <FontAwesomeIcon icon={['fas', 'file']} className={`mx-1.5 text-2xl md:text-4xl text-blue-700`} />
            </div>
            <div className="w-32 text-center text-blue-900/80 text-sm font-bold">
              {card.title}
            </div>
            <div className=" px-10 text-center text-black/40 text-base font-medium">
              {card.description}
            </div>
            
          </div>
        ))}
      </div>
  )
}

export default DownloadsCard