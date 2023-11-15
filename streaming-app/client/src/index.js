import React,{ useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import reducers from '../src/reducers/index'
import reduxThunk from "redux-thunk";
import {history} from './history';
import { Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


//Redux DevToool extension:  https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));


// Create a CustomRouter like browserrouter that consumes a custom history object and manages the state.
// This effectively proxies the custom history object into the Router and manages the navigation state.
const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);
  // console.log(state)

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
  
};
// console.log(history)
ReactDOM.render(
  <Provider store={store}>
  <CustomRouter history={history}>
    <App />
  </CustomRouter>
  </Provider>,
  document.getElementById('root')
);

