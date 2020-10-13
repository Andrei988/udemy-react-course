import axios from 'axios';

const KEY = "AIzaSyBSxVI0Ap74SbZ3hUJfGmwE9ZHmcoH81RA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY
    }
});