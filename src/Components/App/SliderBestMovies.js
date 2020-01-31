import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import {
  SliderContainer, H1, SlideBox,
} from '../StyledComponents/SliderBestMovies/SliderBestMoviesStyles';
import { getBestMovies } from '../../services/client';
import { getYear } from '../../services/helper';
import { ThumbMovie, MovieTitle, MovieDate } from '../StyledComponents/SliderBestMovies/Thumbs';
import settings from '../../services/sliderSettings';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SliderBestMovies = () => {
  const [bestMovies, setBestMovies] = useState();

  useEffect(() => {
    getBestMovies().then(setBestMovies);
  }, []);

  return (
    <>
      <SliderContainer>
        <H1>Les 10 meilleurs films</H1>
        <Slider {...settings}>
          {bestMovies && bestMovies.map((movie) => (
            <SlideBox>
              <ThumbMovie src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDate>
                {getYear(movie.release_date)}
              </MovieDate>
            </SlideBox>
          ))}
        </Slider>
      </SliderContainer>
    </>
  );
};

export default SliderBestMovies;
