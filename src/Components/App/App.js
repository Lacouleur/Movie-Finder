import React, { useState } from 'react';
import AppContainer from '../StyledComponents/AppContainer';
import SearchIcon from '../StyledComponents/Header/Icon';
import Logo from '../StyledComponents/Header/Logo';
import SearchBar from '../StyledComponents/Header/SearchBar';
import MovieList from './MovieList';
import SliderBestMovies from './SliderBestMovies';

const App = () => {
  const [search, setSearch] = useState();
  const [submitedSearch, setSubmitedSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitedSearch(search);
  };

  return (
    <AppContainer>
      <Logo src="/icons-img/logo.svg" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <SearchBar type="text" onChange={(e) => setSearch(e.target.value)} />
      </form>
      <SearchIcon src="/icons-img/searchicon.svg" />
      <SliderBestMovies />
      <MovieList submitedSearch={submitedSearch} />
    </AppContainer>
  );
};

export default App;
