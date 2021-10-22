import axios from 'axios';

const KEY = "AIzaSyAjeFzlIYQhj2em7BKAmphz-B3PCfA1UtM";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

