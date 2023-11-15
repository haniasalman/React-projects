import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {

  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)


  // to set a timer of 500ms so that request is not generated at every word
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    // this will return only when 500ms are not completed so the timer will be updated to 0 everytime at for request generation
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);


  useEffect(() => {
    const doTranslation = async () =>{
     const {data} =  await axios.post(
       //ref link: https://cloud.google.com/translate/docs/reference/rest/v2/translate
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText)
    }
    doTranslation();

  }, [language, text]); // to render the screen at every input text or lang

  return (
  <div className='ui header'>
    <h2>{translated}</h2>
    </div>
  );
};

export default Convert;
