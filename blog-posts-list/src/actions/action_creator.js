//Action creator

import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


//Through dispatch, we can change any data we want 
//through getState we can read or access any data that we want.

//fetching only the unique user ids instead of fetching the request everytime when a same id with different blog is needed
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()     // unique is going to return an array with just the unique user IDs,
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

//here we are defining a function that is going to return a function using es6
export const fetchPosts = () => async dispatch => {
    //await >  we wait for this API request to be completed before we move on and do anything else inside of our new action creator
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};



export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
  
    //manually calling the dispatch function with our action obj
    dispatch({ type: 'FETCH_USER', payload: response.data });
  };
  


