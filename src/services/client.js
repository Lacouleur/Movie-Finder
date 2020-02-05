import axios from 'axios';
import { ApiKey, errMessage, baseUrl } from './settings/globalSettings';

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

export const MoviesByType = (genre, page = 1) => axios
  .get(`${baseUrl}/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`)
  .then((res) => res.data)
  .catch((err) => `${errMessage} ${err}`);
