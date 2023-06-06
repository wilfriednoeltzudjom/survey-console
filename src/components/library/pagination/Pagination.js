import React from 'react';
import PropTypes from 'prop-types';

import PaginationStyled from './Pagination.styled';
import usePagination from './hooks/usePagination';
import { Icon } from '../icon';

export function Pagination({ pagesCount, visiblePagesCount = 5, ...restProps }) {
  const { pages, currentPage, pagesIndexes, handlePageClick, handlePrevPageClick, handleNextPageClick } = usePagination({ pagesCount, visiblePagesCount, ...restProps });
  const { firstPageIndex, lastPageIndex } = pagesIndexes;

  return (
    <PaginationStyled>
      <button className="navigation" role="navigation" disabled={currentPage === 1} onClick={handlePrevPageClick}>
        <Icon name="arrow-left" />
      </button>
      {pages.slice(firstPageIndex, lastPageIndex + 1).map((page) => (
        <button key={page} className="page" role="navigation" disabled={page === currentPage} onClick={() => handlePageClick(page)}>
          {page}
        </button>
      ))}
      <button className="navigation" role="navigation" disabled={currentPage === pagesCount} onClick={handleNextPageClick}>
        <Icon name="arrow-right" />
      </button>
    </PaginationStyled>
  );
}
Pagination.propTypes = {
  currentPage: PropTypes.number,
  pagesCount: PropTypes.number.isRequired,
  visiblePagesCount: PropTypes.number,
  page: PropTypes.number,
  onPageChange: PropTypes.func,
};
