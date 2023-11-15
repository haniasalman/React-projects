import axios from 'axios'; //3rd part package to fetch network requests. 


//create method is used to create instance of axios and then pass default properties in it
export default axios.create({
    baseURL: 'https://api.unsplash.com',

headers:{
        Authorization: 'Client-ID R1GkLvxY-8B9RAerAnWvSSnH5dGyiE35kWbi7JCf85o'
      }
});