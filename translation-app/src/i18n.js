import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationEN from "./locales/en/translation.json";
import translationUR from "./locales/ur/translation.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  ur: {
    translation: translationUR,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    keySeparator: false,  //override char to separate keys
    interpolation: {  // allows integrating dynamic values into our translations
      escapeValue: false, //escape passed in values to avoid XSS injection > not needed for react as it escapes by default
    },
  });

export default i18n;
