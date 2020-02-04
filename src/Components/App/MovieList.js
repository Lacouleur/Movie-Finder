import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import { searchForMovie, discoverMovies } from '../../services/client';
import { getYear } from '../../services/helper';
import {
  Paging,
  PagingArrow,
  Paginate,
} from '../StyledComponents/Paging/Paging';
import {
  ListContainer,
  MovieBoxLi,
  ThumbMovieLi,
  MovieTitleLi,
  MovieDateLi,
  H1Li,
  ListBlock,
} from '../StyledComponents/MovieList/MovieListStyles';

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
    discoverMovies(data.selected + 1 ).then((res) => {
      console.log(data.selected);
      setPagingInfos(res);
      setMovies(res.results.slice(0, 11));
    });
  };

  return (
    <>
      <ListBlock>
      <H1Li>{`${isSearch}`}</H1Li>
      <ListContainer>
        {movies && movies.map((movie) => (
          <>
            <MovieBoxLi>
              <ThumbMovieLi marginTop="2rem" marginRight="3rem" marginLeft="3rem" src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
              <MovieTitleLi>{movie.title}</MovieTitleLi>
              <MovieDateLi>
                {getYear(movie.release_date)}
              </MovieDateLi>
            </MovieBoxLi>
          </>
        ))}
      </ListContainer>
      </ListBlock>

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
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            initialPage={0}
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
