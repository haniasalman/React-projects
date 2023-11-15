import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from "redux";
import reducers from './reducers/reducers'

ReactDOM.render(

  //we don't use e store directly. Instead, we pass it off to this provider and the provider essentially takes care of everything 
  //any component inside of our app can get access to that reducer store through the provider tag
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);

