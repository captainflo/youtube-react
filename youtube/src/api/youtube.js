import axios from 'axios';
import key from '../config/keys';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: key.youtube,
  },
});
