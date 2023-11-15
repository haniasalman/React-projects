//Action creator
//any time that we want to update our data with redux, we will call an action creator.

export const selectSong = (song) => {
    //returning an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
