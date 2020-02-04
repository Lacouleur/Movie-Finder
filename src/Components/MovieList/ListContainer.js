import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieBoxLi,
  ThumbMovieLi,
  MovieTitleLi,
  MovieDateLi,
  ListContainer,
} from '../StyledComponents/MovieList/MovieListStyles';
import { getYear } from '../../services/helper';

const MovieListContainer = ({ movies }) => {
  const BaseUrl = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';

  return (
    <ListContainer>
      {movies.map((movie) => (
        <MovieBoxLi>
          <ThumbMovieLi
            src={`${BaseUrl}${movie.backdrop_path}`}
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
};

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieListContainer;
