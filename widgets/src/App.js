import './App.css';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
// import React from 'react';

function App() {

  const items =[
    {
      title: 'What is React?',
      content: 'React is a Javascript...'
    },
    {
      title: 'How do we show...',
      content: 'To show content...'
    },
    {
      title: 'Why is React useful...',
      content: 'Engineers like React...'
    }
  ]
  
  const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'A Shade of Blue',
      value: 'blue'
    }
  ]

  const [selectedColor, setSelectedColor] = useState(options[0])

  
 

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Accordion items={items}/>} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/dropdown" element={< Dropdown options={options} selectedColor={selectedColor} onSelectColorChange = {setSelectedColor}/>} />
        <Route path="/translate" element={<Translate />} />


      </Routes>
  
    </div>

  );
}

export default App;
