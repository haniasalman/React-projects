import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <form className="ui form">
      <div className="field">
        <label>Enter Text</label>
        <div className="two fields">
          <div className="field">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Dropdown
        selectedColor={language}
        onSelectColorChange={setLanguage}
        options={options}
      />

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </form>
  );
};

export default Translate;
