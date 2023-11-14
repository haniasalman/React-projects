import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux"; //applymiddleware is a fn to how we connect a middleware like thunk to our redux store itself.
import reducers from './reducers/reducers'
import thunk from 'redux-thunk'


const store = createStore(reducers, applyMiddleware(thunk)) // hooking up a middleware to a Redux store, 

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
