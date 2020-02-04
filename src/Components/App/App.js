import React, { useState } from 'react';
import AppContainer from '../StyledComponents/Main/AppContainer';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import SliderBestMovies from '../Slider/Slider';
import BgImg from '../StyledComponents/Main/BgImg';
import Sizer from '../StyledComponents/Main/Sizer';

const App = () => {
  const [search, setSearch] = useState();
  const [submitedSearch, setSubmitedSearch] = useState();

  return (
    <AppContainer>
      <Sizer>
        <BgImg />
        <Header
          handleSubmit={(e) => {
            e.preventDefault();
            setSubmitedSearch(search);
          }}
          setSearch={setSearch}
        />
        <SliderBestMovies />
        <MovieList submitedSearch={submitedSearch} />
      </Sizer>
    </AppContainer>
  );
};

export default App;
