import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
  };

  return (
    <div className="felx inline-flex gap-2 text-white  text-xs md:text-sm lg:text-base font-semibold">
      <button className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 border-white hover:bg-white/20 ${activeLanguage === "en" ? "bg-goldgradient" : "bg-transparent text-white"}`} onClick={() => changeLanguage("en")}>EN</button>
      <button className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 hover:text-blue-90 border-white hover:bg-white/20 ${activeLanguage === "si" ? "bg-goldgradient" : "bg-transparent text-white"}`} onClick={() => changeLanguage("si")}>SI</button>
      <button className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 hover:text-blue-90 border-white hover:bg-white/20 ${activeLanguage === "ta" ? "bg-goldgradient" : "bg-transparent text-white"}`} onClick={() => changeLanguage("ta")}>TA</button>
    </div>
  );
};

export default LanguageSelector;
