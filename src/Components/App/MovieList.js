import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';
import { discoverMovies } from '../../services/client';
import { ThumbMovie } from '../StyledComponents/Commons/Commons';
import {
  ListContainer,
  MovieBox,
  MovieTitle,
  MovieDate,
  Paging,
} from '../StyledComponents/MovieList/MovieList';

const Paginate = styled.div`
color: pink;
`;


const getYear = (DateStringToTransform) => {
  const DateConverted = new Date(DateStringToTransform);
  return DateConverted.getFullYear();
};

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [pagingInfos, setPagingInfos] = useState();

  useEffect(() => {
    discoverMovies().then((res) => {
      setPagingInfos(res);
      setMovies(res.results);
    });
  }, []);

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
          previousLabel={<Paging>Billy Boy</Paging>}
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

const a: string = 1

export default MovieList;

/*
<PagingContainer>
<Paging onClick={() => Displayed('previous')}><PagingArrow src="/icons-img/paginationpreviousarrow.svg" /></Paging>
{ moviesList && pagingDisplayed.map((number) => (
  <>
    <Paging>
      <PagingTxt>
        {number}
      </PagingTxt>
    </Paging>
  </>
)) }
<Paging onClick={() => Displayed('next')}><PagingArrow src="/icons-img/paginationnextarrow.svg" /></Paging>
}
</PagingContainer>
*/

/*
const Displayed = (value) => {
  console.log('Displayed -> value is', value);
  const pagesTotal = moviesList.total_pages;
  let min = 0;
  let max = 9;
  const numberTodisplay = [];
  if (value === 'next' && max < pagesTotal) {
    min += 1;
    max += 1;
    for (let i = min; i <= max; i += 1) {
      numberTodisplay.push(i);
    }
    numberTodisplay.splice(0);
    console.log("number to display -> ", numberTodisplay);

  } else if (value === 'previous' && min > 0) {
    min -= 1;
    max -= 1;
    console.log("Previous -> J'entre dans la seconde condition");
    for (let i = min; i <= max; i += 1) {
      numberTodisplay.push(i);
      console.log('ligne 105 -> 2e boucle for');
    }
  }
  setPagingDisplayed(numberTodisplay);
}; */
