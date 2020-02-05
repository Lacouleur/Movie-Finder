import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import theme from '../../styles/theme';
import { customStyles, optGenre } from '../../services/settings/sortButtonsSettings';
import { MoviesByType, discoverMovies } from '../../services/client';
import { P } from '../StyledComponents/Commons/Thumbs';
import { handleSpliceResults } from '../../services/helper';

const SortButtons = ({ setMovies, setPagingInfos }) => {
  const onChangeType = (e) => {
    if (e.value !== '0') {
      MoviesByType(e.value)
        .then((res) => {
          setMovies(res.results.slice(0, 10));
          setPagingInfos(res.total_pages);
        });
    } else {
      discoverMovies(e.value)
        .then((res) => {
          setMovies(handleSpliceResults(res.results, setMovies));
          setPagingInfos(res.total_pages);
        });
    }
  };

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
  setPagingInfos: PropTypes.func.isRequired,
};

export default SortButtons;
