
import axios from 'axios'; //3rd part package to fetch network requests. 

const KEY = 'AIzaSyAcyp5B2_tvljWYxxizVDNkyYu6TcDb6Nk'


//create method is used to create instance of axios and then pass default properties in it
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params :{
        part : 'snippet', 
        maxResults : 5,
        key : KEY,
        type: 'video',  //to only search for videos and not playlists
    }
});