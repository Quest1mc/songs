import { combineReducers } from 'redux';

const songsReducer = ()=> {
return [
    {title: 'No Scrubs', duration : '4:05'},
    {title: 'Macarena', duration : '2:30'},
    {title: 'All Star', duration : '3:15'},
    {title: 'I Want It That Way', duration : '1:45'},
    {title: 'Straight out of Compton', duration : '4:22'}
];
};

const selectedSongReducer = (selectedSong = null , action )=> {
    if (action.type === 'SONG_SELECTED') {
        return  action.payload
    }
    return selectedSong

};

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
});