import axios from 'axios';
import { ApiKey, errMessage, baseUrl } from './globalSettings';

export const searchForMovie = (userSearch) => axios
  .get(`${baseUrl}/search/movie?api_key=${ApiKey}&query='${userSearch}'`)
  .then((res) => res.data)
  .catch((err) => `${errMessage} ${err}`);

export const getBestMovies = () => axios
  .get(`${baseUrl}/trending/movie/week?api_key=${ApiKey}`)
  .then((res) => {
    const { results } = res.data;
    return results.slice(0, 11);
  }).catch((err) => `${errMessage} ${err}`);

export const discoverMovies = (page = 1) => axios
  .get(`${baseUrl}/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  .then((res) => res.data)
  .catch((err) => `${errMessage} ${err}`);

export const MoviesByDate = (year, page = 1) => axios
  .get(`${baseUrl}/search/movie?api_key=1b35457e95b53a129af7ae00895df529&language=fr-FR&page=1&include_adult=false&year=${year}&page=${page}`)
  .then((res) => res.data)
  .catch((err) => `${errMessage} ${err}`);
