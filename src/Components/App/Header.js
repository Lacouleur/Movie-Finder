import React from 'react';
import PropTypes from 'prop-types';
import {HeaderContainer, Logo} from '../StyledComponents/Header/Header';
import { SearchBar, Form, SearchIcon } from '../StyledComponents/Header/SearchBar';

const Header = ({ handleSubmit, setSearch }) => (
  <HeaderContainer>
    <Logo src="/icons-img/logo.svg" />
    <Form onSubmit={handleSubmit}>
      <SearchBar
        placeholder="rechercher un film"
        type="text"
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <SearchIcon src="/icons-img/searchicon.svg" />
    </Form>
  </HeaderContainer>
);

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Header;
