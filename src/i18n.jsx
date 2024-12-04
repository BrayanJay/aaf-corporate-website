import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./contents/resources";
import branchesData from "./contents/BranchesData";

// Merge the two datasets into a single resource object
const mergedResources = {
  en: {
    ...resources.en,
    ...branchesData.en,
  },
  si: {
    ...resources.si,
    ...branchesData.si,
  },
  ta: {
    ...resources.ta,
    ...branchesData.ta,
  },
};

i18n.use(initReactI18next).init({
  resources: mergedResources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
