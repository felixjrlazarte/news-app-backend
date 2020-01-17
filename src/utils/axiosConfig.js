import axios from 'axios';

export const API_KEY = '8914225374434933a89781411c635450';

const instance =  axios.create({
  baseURL: 'http://newsapi.org/v2/',
});

export default instance;
