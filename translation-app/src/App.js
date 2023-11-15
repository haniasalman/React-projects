import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  //Calling t and i18n method from useTranslation hook 
  const { t, i18n } = useTranslation();
  // i18n.dir() will provide the current language direction, and then body dir attribute will be assigned with the direction
  document.body.dir = i18n.dir();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
    console.log(document.body.dir)
  }
  return (
    <div >
      {/* Select box to change language */}
      <select style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en" >English</option>
        <option value="ur" >اردو</option>
      </select>
      {/* calling name of the variable from  the translation.json file to t() method */}
      {/* content will be translated using the provided t function. */}
      <h1>{t('Easypaisa')}</h1> 
      <h3>{t('Money Transfer')}</h3>
      <p>{t('MT Detail')}</p>
    </div>
  );
}

export default App;
