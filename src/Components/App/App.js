import React, { useState } from 'react';
import AppContainer from '../StyledComponents/AppContainer';
import Header from './Header';
import MovieList from './MovieList';
import SliderBestMovies from './SliderBestMovies';
import BgImg from '../StyledComponents/BgImg';

const App = () => {
  const [search, setSearch] = useState();
  const [submitedSearch, setSubmitedSearch] = useState();

  return (
    <AppContainer>
      <BgImg src="icons-img/backgroundimg.png" />
      <Header
        handleSubmit={(e) => {
          e.preventDefault();
          setSubmitedSearch(search);
        }}
        setSearch={setSearch}
      />
      <SliderBestMovies />
      <MovieList submitedSearch={submitedSearch} />
    </AppContainer>
  );
};

export default App;
