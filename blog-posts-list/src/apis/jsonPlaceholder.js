import axios from 'axios';

//JSON Placeholder API
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
