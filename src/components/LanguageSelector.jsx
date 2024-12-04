import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
  

  // Change font class on the <html> element
  const htmlElement = document.documentElement;
  htmlElement.classList.remove("font-roboto", "font-sinhala_sans", "font-tamil_sans");
  
  switch (lang) {
    case "en":
      document.documentElement.classList.add("font-roboto");
      break;
    case "si":
      document.documentElement.classList.add("font-sinhala_sans");
      break;
    case "ta":
      document.documentElement.classList.add("font-tamil_sans");
      break;
    default:
      document.documentElement.classList.add("font-roboto");
  }
};

  return (
    <div className="felx inline-flex gap-2 text-white  text-xs md:text-sm lg:text-base font-semibold">
      <button className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 border-white hover:bg-white/20 ${activeLanguage === "en" ? "bg-goldgradient" : "bg-transparent text-white"}`} onClick={() => changeLanguage("en")}>E</button>
      <button className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 hover:text-blue-90 border-white hover:bg-white/20 ${activeLanguage === "si" ? "bg-goldgradient" : "bg-transparent text-white"}`} onClick={() => changeLanguage("si")}>සි</button>
      <button className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 hover:text-blue-90 border-white hover:bg-white/20 ${activeLanguage === "ta" ? "bg-goldgradient" : "bg-transparent text-white"}`} onClick={() => changeLanguage("ta")}>த</button>
    </div>
  );
};

export default LanguageSelector;
