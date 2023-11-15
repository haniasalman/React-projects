import { combineReducers } from "redux";

const songsReducer = () =>{
    //returning a list of static songs array
    return [
        {title: 'Pasoori' , duration: '4:12'},
        {title: 'Oh No' , duration: '3:00'},
        {title: 'Dont let me down' , duration: '1:56'},
        {title: 'Cola veri D' , duration: '6:09'},
        {title: 'Amplifier' , duration: '6:05'},
    ];
}

const selectedSongReducer = (selectedSong = null , action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})