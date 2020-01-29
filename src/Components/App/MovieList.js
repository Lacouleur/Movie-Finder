import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import { searchForMovie, discoverMovies } from '../../services/client';
import { getYear } from '../../services/helper';
import {
  ThumbMovie,
  MovieTitle,
  MovieDate,
} from '../StyledComponents/Commons/Commons';
import {
  ListContainer,
  MovieBox,
  Paging,
  PagingArrow,
  Paginate,
} from '../StyledComponents/MovieList/MovieList';

const MovieList = ({ submitedSearch }) => {
  const [movies, setMovies] = useState();
  const [pagingInfos, setPagingInfos] = useState();

  useEffect(() => {
    if (submitedSearch !== '') {
      searchForMovie(submitedSearch).then((res) => {
        setPagingInfos(res);
        setMovies(res.results);
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
      <ListContainer>
        {movies && movies.map((movie) => (
          <>
            {/* console.log({movie}) */}
            <MovieBox>
              <ThumbMovie marginTop="2rem" marginBottom="3rem" marginRight="3rem" marginLeft="3rem" src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
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
          activeClassName="pagingBoxactivePage"
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
