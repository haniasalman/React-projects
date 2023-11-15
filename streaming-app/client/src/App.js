import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header'

const App = () => {

    return (
    <div className="ui container">    
        <div>
          <Header />
          <Routes>
          <Route path="/" exact element={<StreamList/>} />
          <Route path="/streams/new" exact element={<StreamCreate/>} />
          <Route path="/streams/edit/:id" element={<StreamEdit/>} />
          <Route path="/streams/delete/:id" exact element={<StreamDelete/>} />
          <Route path="/streams/:id" exact element={<StreamShow/>} />
          </Routes>
        </div>    
    </div>
  );
};

export default App;
