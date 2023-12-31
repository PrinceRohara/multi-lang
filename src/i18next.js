import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/en.json";
import jp from "./lng/jp.json";
import hi from "./lng/hi.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    jp: {
      translation: jp,
    },
    hi: {
      translation: hi,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
