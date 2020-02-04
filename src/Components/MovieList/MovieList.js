import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { searchForMovie, discoverMovies } from '../../services/client';
import { getYear, handleSpliceResults } from '../../services/helper';
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
  const BaseUrl = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';

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

  return (
    <>
      <ListBlock>
        <H1Li>{`${isSearch}`}</H1Li>
        <ListContainer>
          {movies && movies.map((movie) => (
            <>
              <MovieBoxLi>
                <ThumbMovieLi src={`${BaseUrl}${movie.backdrop_path}`} />
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
            onPageChange={(data) => handleSpliceResults(data, setPagingInfos, setMovies)}
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
