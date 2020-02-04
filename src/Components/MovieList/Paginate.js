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
    setPagingInfos,
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
      pageCount={pagingInfos.total_pages}
      marginPagesDisplayed={0}
      pageRangeDisplayed={10}
      onPageChange={(data) => handleSpliceResults(data, setPagingInfos, setMovies)}
      initialPage={0}
    />
  </PaginateStyle>
);

Paginate.propTypes = {
  pagingInfos: PropTypes.shape({
    page: PropTypes.string,
    total_pages: PropTypes.number,
  }).isRequired,
  setPagingInfos: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
};

export default Paginate;
