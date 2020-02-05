/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { SliderContainer } from '../StyledComponents/SliderBestMovies/SliderBestMoviesStyles';
import { getBestMovies } from '../../services/client';
import { getYear } from '../../services/helper';
import {
  ThumbMovie, MovieTitle, MovieDate, MovieBox, H1,
} from '../StyledComponents/Commons/Thumbs';
import settings from '../../services/settings/sliderSettings';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SliderBestMovies = () => {
  const [bestMovies, setBestMovies] = useState();
  let slider;

  useEffect(() => {
    getBestMovies().then(setBestMovies);
  }, []);

  const horizontalScroll = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      slider.slickNext();
    } else {
      slider.slickPrev();
    }
  };

  return (
    <>
      <H1>Les 10 meilleurs films</H1>
      <SliderContainer onWheel={horizontalScroll}>
        <Slider {...settings} ref={(slick) => { slider = slick; }}>
          {bestMovies && bestMovies.map((movie) => (
            <MovieBox key={movie.title}>
              <ThumbMovie src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDate>
                {getYear(movie.release_date)}
              </MovieDate>
            </MovieBox>
          ))}
        </Slider>
      </SliderContainer>
    </>
  );
};

export default SliderBestMovies;
