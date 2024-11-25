import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

const HeroBanner = () => {
  const { t } = useTranslation();
  const carouselData = t("carouselLandingPage", { returnObjects: true }); // Translated carousel data
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
      {/* Image slides with text */}
      {carouselData.map((item, idx) => (
        <div
          key={idx}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentIndex === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for text */}
          <div className="flex flex-row bg-black/30 h-full">
            <div className="flex-col basis-1/2"></div>
            <div className="flex flex-col basis-1/2 justify-center items-start p-8 h-full gap-2 md:gap-10">
              <h2 className="text-white text-lg md:text-xl font-semibold uppercase">
                {item.title}
              </h2>
              <h1 className="border-l-8 border-blue-900 text-white text-4xl md:text-7xl font-bold uppercase pl-4">
                {item.intro}
              </h1>
              <p className="text-white text-xs md:text-md font-medium mt-2 mr-10">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Previous and Next buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20 bg-opacity-50 rounded-full p-2"
      >
        <FontAwesomeIcon icon={["fas", "chevron-left"]} size="2xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20 bg-opacity-50 rounded-full p-2"
      >
        <FontAwesomeIcon icon={["fas", "chevron-right"]} size="2xl" />
      </button>

      {/* Dots/indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === idx ? "bg-white" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
