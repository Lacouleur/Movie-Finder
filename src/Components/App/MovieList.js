import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import { searchForMovie, discoverMovies } from '../../services/client';
import { getYear } from '../../services/helper';
import {
  Paging,
  PagingArrow,
  Paginate,
} from '../StyledComponents/MovieList/Paging';
import {
  ListContainer,
  MovieBox,
  ThumbMovie,
  MovieTitle,
  MovieDate,
  H1,
} from '../StyledComponents/MovieList/MovieList';

const MovieList = ({ submitedSearch }) => {
  const [movies, setMovies] = useState();
  const [pagingInfos, setPagingInfos] = useState();
  const [isSearch, setIsSearch] = useState('Tous les films');

  useEffect(() => {
    if (submitedSearch !== '') {
      searchForMovie(submitedSearch).then((res) => {
        setPagingInfos(res);
        setMovies(res.results);
        setIsSearch('Recherche :');
      });
    } else {
      discoverMovies().then((res) => {
        setPagingInfos(res);
        setMovies(res.results);
      });
    }
  }, [submitedSearch]);

  const handlePageClick = (data) => {
    discoverMovies(data.selected).then((res) => {
      setPagingInfos(res);
      setMovies(res.results);
    });
  };

  return (
    <>
      <H1>{`${isSearch}`}</H1>
      <ListContainer>
        {movies && movies.map((movie) => (
          <>
            <MovieBox>
              <ThumbMovie marginTop="2rem" marginRight="3rem" marginLeft="3rem" src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDate>
                {getYear(movie.release_date)}
              </MovieDate>
            </MovieBox>
          </>
        ))}
      </ListContainer>

      {movies && (
      <Paginate>
        <ReactPaginate
          previousLabel={<Paging><PagingArrow src="/icons-img/paginationpreviousarrow.svg" /></Paging>}
          nextLabel={<Paging><PagingArrow src="/icons-img/paginationnextarrow.svg" /></Paging>}
          pageClassName="pagingBox"
          containerClassName="pagingContainer"
          pageLinkClassName="pagingText"
          activeClassName="pagingBox-activePage"
          pageCount={pagingInfos.total_pages}
          marginPagesDisplayed={0}
          pageRangeDisplayed={9}
          onPageChange={handlePageClick}
        />
      </Paginate>
      )}
    </>
  );
};

MovieList.propTypes = {
  submitedSearch: PropTypes.string,
};

MovieList.defaultProps = {
  submitedSearch: '',
};

export default MovieList;
