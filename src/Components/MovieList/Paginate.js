import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import {
  Paging,
  PagingArrow,
  PaginateStyle,
} from '../StyledComponents/Paging/PagingStyles';
import { handleSpliceResults } from '../../services/helper';

const Paginate = (
  {
    pagingInfos,
    setMovies,
  },
) => (
  <PaginateStyle>
    <ReactPaginate
      previousLabel={<Paging><PagingArrow src="/icons-img/paginationpreviousarrow.svg" /></Paging>}
      nextLabel={<Paging><PagingArrow src="/icons-img/paginationnextarrow.svg" /></Paging>}
      pageClassName="pagingBox"
      containerClassName="pagingContainer"
      pageLinkClassName="pagingText"
      activeClassName="pagingBox-activePage"
      pageCount={pagingInfos}
      marginPagesDisplayed={0}
      pageRangeDisplayed={10}
      onPageChange={(data) => handleSpliceResults(data, setMovies)}
      initialPage={0}
    />
  </PaginateStyle>
);
Paginate.propTypes = {
  pagingInfos: PropTypes.number.isRequired,
  setMovies: PropTypes.func.isRequired,
};

export default Paginate;
