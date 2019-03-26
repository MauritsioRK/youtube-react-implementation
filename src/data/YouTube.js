import Axios from 'axios';

const URL = `https://www.googleapis.com/youtube/v3/`;
const API_KEY = ""; // Throw in your API key here!

export default Axios.create({
  baseURL: URL,
  params: {
    maxResults: 4,
    key: API_KEY
  }
})