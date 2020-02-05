import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import theme from '../../styles/theme';
import { customStyles, optGenre } from '../../services/settings/sortButtonsSettings';
import { MoviesByType, discoverMovies } from '../../services/client';
import { P } from '../StyledComponents/Commons/Thumbs';
import { handleSpliceResults } from '../../services/helper';

const SortButtons = ({ setMovies }) => {
  const onChangeType = (e) => (
    (e.value !== '0')
      ? MoviesByType(e.value).then((res) => setMovies(res.results.slice(0, 10)))
      : discoverMovies(e.value).then((res) => setMovies(handleSpliceResults(res.results, setMovies)))
  );

  return (
    <>
      <P>Filtrer par : </P>
      <Select
        theme={theme}
        styles={customStyles}
        options={optGenre}
        onChange={(e) => onChangeType(e)}
        placeholder="Genre"
      />
    </>
  );
};

SortButtons.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default SortButtons;
