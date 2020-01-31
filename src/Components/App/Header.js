import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../StyledComponents/Header/HeaderContainer';
import Logo from '../StyledComponents/Header/Logo';
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
