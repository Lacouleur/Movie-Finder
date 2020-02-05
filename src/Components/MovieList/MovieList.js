import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchForMovie, discoverMovies } from '../../services/client';
import { H1Li, ListBlock } from '../StyledComponents/MovieList/MovieListStyles';
import MovieListContainer from './MovieListContainer';
import Paginate from './Paginate';
import SortButtons from '../SortButtons/SortButtons';

const MovieList = ({ submitedSearch }) => {
  const [movies, setMovies] = useState();
  const [isSearch, setIsSearch] = useState('Tous les films');
  const [pagingInfos, setPagingInfos] = useState();

  useEffect(() => {
    if (submitedSearch !== '') {
      searchForMovie(submitedSearch)
        .then((res) => {
          setPagingInfos(res.total_pages);
          setMovies(setMovies(res.results.slice(0, 10)));
          setIsSearch('Recherche :');
        });
    } else {
      discoverMovies()
        .then((res) => {
          setPagingInfos(res.total_pages);
          setMovies(res.results);
        });
    }
  }, [submitedSearch]);


  return (
    <ListBlock>
      <H1Li>{`${isSearch}`}</H1Li>
      <SortButtons setMovies={setMovies} />
      {movies && (
        <>
          <MovieListContainer movies={movies} />
          <Paginate
            pagingInfos={pagingInfos}
            setMovies={setMovies}
          />
        </>
      )}
    </ListBlock>
  );
};

MovieList.propTypes = {
  submitedSearch: PropTypes.string,
};

MovieList.defaultProps = {
  submitedSearch: '',
};

export default MovieList;
