import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import theme from '../../styles/theme';
import { customStyles, optGenre } from '../../services/settings/sortButtonsSettings';
import { MoviesByType, discoverMovies } from '../../services/client';
import { P } from '../StyledComponents/Commons/Thumbs';

const SortButtons = ({ setMovies }) => {
  const onChange = (e) => (
    ((e.value !== '0')
      ? setMovies(MoviesByType(e.value))
      : setMovies(discoverMovies(e.value))
    )
  );

  return (
    <>
      <P>Filtrer par : </P>
      <Select
        theme={theme}
        styles={customStyles}
        options={optGenre}
        onChange={(e) => onChange(e)}
        placeholder="Genre"
      />
    </>
  );
};

SortButtons.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default SortButtons;
