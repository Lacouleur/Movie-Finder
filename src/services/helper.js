/* eslint-disable import/prefer-default-export */
import { discoverMovies } from './client';

export const getYear = (DateStringToTransform) => {
  const DateConverted = new Date(DateStringToTransform);
  return DateConverted.getFullYear();
};

export const handleSpliceResults = (data, setMovies) => {
  if ((data.selected + 1) % 2 !== 0) {
    discoverMovies((data.selected + 1))
      .then((res) => {
        setMovies(res.results.slice(0, 10));
      });
  } else {
    discoverMovies((data.selected + 1))
      .then((res) => {
        setMovies(res.results.slice(10, 20));
      });
  }
};
