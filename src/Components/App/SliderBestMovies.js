import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import {
  SliderContainer, H1, Arrow, SlideBox,
} from '../StyledComponents/SliderBestMovies/SliderBestMoviesStyles';
import { getBestMovies } from '../../services/client';
import { getYear } from '../../services/helper';
import { ThumbMovie, MovieTitle, MovieDate } from '../StyledComponents/Commons/Commons';
import 'slick-carousel/slick/slick-theme.css';
import SlickStyled from '../StyledComponents/SliderBestMovies/SlickStyled';

const SliderBestMovies = () => {
  const [bestMovies, setBestMovies] = useState();
  const [slideToShow, setSlideToShow] = useState(4);
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    getBestMovies().then(setBestMovies);
  }, []);

  React.useEffect(() => {
    const checkWindowSize = () => {
      setWidth(window.innerWidth); 
      if (width < 839 ) {
        setSlideToShow(2);
      } else if (width > 840 && width < 1000 ) {
        setSlideToShow(3);
      } else if (width > 1000 ) {
        setSlideToShow(4);
      }
    };

    window.addEventListener('resize', checkWindowSize)
  })

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: `${slideToShow}`,
    slidesToScroll: 1,
    vertical: false,
    nextArrow: <Arrow
      src="icons-img/slidernextarrow.svg"
    />,
    prevArrow: <Arrow
      src="icons-img/sliderpreviousarrow.svg"
    />,
  };

  return (
    <>
      <H1>Les 10 meilleurs films</H1>
      <SliderContainer>
        <SlickStyled>
          <Slider {...settings}>
            {bestMovies && bestMovies.map((movie) => (
              <SlideBox>
                <ThumbMovie margin="auto" src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.backdrop_path}`} />
                <MovieTitle marginLeft="25%">{movie.title}</MovieTitle>
                <MovieDate marginLeft="25%">
                  {getYear(movie.release_date)}
                </MovieDate>
              </SlideBox>
            ))}
          </Slider>
        </SlickStyled>
      </SliderContainer>
    </>
  );
};

export default SliderBestMovies;
