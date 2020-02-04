import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchForMovie, discoverMovies } from '../../services/client';
import { H1Li, ListBlock } from '../StyledComponents/MovieList/MovieListStyles';
import MovieListContainer from './ListContainer';
import Paginate from './Paginate';

const MovieList = ({ submitedSearch }) => {
  const [movies, setMovies] = useState();
  const [pagingInfos, setPagingInfos] = useState();
  const [isSearch, setIsSearch] = useState('Tous les films');

  useEffect(() => {
    if (submitedSearch !== '') {
      searchForMovie(submitedSearch)
        .then((res) => {
          setPagingInfos(res.page, res.total_pages);
          setMovies(res.results);
          setIsSearch('Recherche :');
        });
    } else {
      discoverMovies().then((res) => {
        setPagingInfos(res.page, res.total_pages);
        setMovies(res.results);
      });
    }
  }, [submitedSearch]);

  return (
    <ListBlock>
      <H1Li>{`${isSearch}`}</H1Li>
      {movies && (
        <>
          <MovieListContainer
            movies={movies}
          />
          <Paginate
            pagingInfos={pagingInfos}
            setPagingInfos={setPagingInfos}
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
