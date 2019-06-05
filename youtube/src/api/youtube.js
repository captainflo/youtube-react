import axios from 'axios';

const KEY = 'AIzaSyCFWVTdzYdKnw2X5K-_6e84um3VkQJsXRE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

