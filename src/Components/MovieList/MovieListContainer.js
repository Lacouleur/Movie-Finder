import React from 'react';
import PropTypes from 'prop-types';
import { getYear, checkPath } from '../../services/helper';
import {
  MovieBoxLi,
  ThumbMovieLi,
  MovieTitleLi,
  MovieDateLi,
  ListContainer,
} from '../StyledComponents/MovieList/MovieListStyles';


const MovieListContainer = ({ movies }) => (
  <ListContainer>
    {movies.map((movie) => (
      <MovieBoxLi key={movie.backdrop_path}>
        <ThumbMovieLi
          src={checkPath(movie.backdrop_path)}
          alt={movie.title}
        />
        <MovieTitleLi>
          {movie.title}
        </MovieTitleLi>
        <MovieDateLi>
          {getYear(movie.release_date)}
        </MovieDateLi>
      </MovieBoxLi>
    ))}
  </ListContainer>
);

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieListContainer;
