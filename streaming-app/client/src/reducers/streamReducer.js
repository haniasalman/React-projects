import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //delete the obj that has that id as written in actioncreator
    default:
      return state;
  }
};


//Key interpolation synatx: [action.payload.id]: action.payload
// So by using the syntax, look at the action, payload ID property. Look at that ID, whatever the number or 
//string or value it is, take that and create a new key using it inside of this overall object and to that key, 
//assign action, not payload.


//mayKeys: _.mapKeys(action.payload, 'id') 
// It is a fn that's going to take an array and then return an object.
// The keys of this new object are taken from each individual record inside of the array so
// we pass in the list of strings that we got from the our API as first argument.
// And for second argument we will use string of ID, which tells that
// for every one of these objects inside the original array use a key taken from the ID property of each one.