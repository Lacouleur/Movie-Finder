import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AppContainer from '../StyledComponents/AppContainer';
import BgImg from '../StyledComponents/BgImg';
import Icon from '../StyledComponents/Header/Icon';
import Logo from '../StyledComponents/Header/Logo';
import SearchBar from '../StyledComponents/Header/SearchBar';
import { searchForMovie } from '../../services/client';
import TenBestMovies from './TenBestMovie';
import MovieList from './MovieList';

const App = () => {
  const [userSearch, setUserSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForMovie(userSearch);
  };

  return (
    <AppContainer>
      <Logo src="/icons-img/logo.svg" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <SearchBar type="text" onChange={(e) => setUserSearch(e.target.value)} />
      </form>
      <Icon src="/icons-img/searchicon.svg" />
      <TenBestMovies />
      <MovieList />
    </AppContainer>
  );
};

export default App;
