import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Bulpoi afurisit', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'Smells like teen spirit', duration: '1:46' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})