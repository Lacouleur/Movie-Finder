import React from 'react';
import { Arrow } from '../Components/StyledComponents/SliderBestMovies/SliderBestMoviesStyles';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: false,
  nextArrow: <Arrow
    src="icons-img/slidernextarrow.svg"
  />,
  prevArrow: <Arrow
    src="icons-img/sliderpreviousarrow.svg"
  />,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        swipe: true,
      },
    },
  ],
};

export default settings;
