import axios from 'axios';

const ApiKey = '1b35457e95b53a129af7ae00895df529';

export const searchForMovie = async (userSearch) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query='${userSearch}'`,
  {
  }).then((res) => console.log(res.data)).catch(() => {
  const err = `An error occured in Api Request, please check your side and try again. Code error => ${err}`;
  return err;
});

export const getBestMovies = async () => axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${ApiKey}`,
  {
  }).then((res) => {
  const { results } = res.data;
  return results.slice(0, 11);
}).catch((err) => `An error occured in Api Request, please check your side and try again. Code error => ${err}`);

export const discoverMovies = async (page = 1) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  .then((res) => res.data)
  .catch((err) => `An error occured in Api Request, please check your side and try again. Code error => ${err}`);
