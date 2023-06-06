import { useState, useEffect } from 'react';

export default function ({ pagesCount, visiblePagesCount, page, onPageChange }) {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [pagesIndexes, setPagesIndexes] = useState({
    firstPageIndex: 0,
    lastPageIndex: 0,
  });

  useEffect(() => {
    if (page) setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    setPages(
      Array(pagesCount)
        .fill()
        .map((_, index) => getPage(index))
    );
  }, [pagesCount]);

  useEffect(() => {
    setPagesIndexes({
      firstPageIndex: 0,
      lastPageIndex: visiblePagesCount - 1,
    });
  }, [visiblePagesCount]);

  function handlePageChange(targetPage) {
    if (!page) setCurrentPage(targetPage);
    if (onPageChange) onPageChange(targetPage);
  }

  function handlePrevPageClick() {
    if (currentPage > 1) {
      const targetPageIndex = getPageIndex(currentPage - 1);
      if (targetPageIndex < pagesIndexes.firstPageIndex) {
        setPagesIndexes({
          firstPageIndex: targetPageIndex,
          lastPageIndex: targetPageIndex + visiblePagesCount - 1,
        });
      }
      handlePageChange(getPage(targetPageIndex));
    }
  }

  function handleNextPageClick() {
    if (currentPage < pagesCount) {
      const targetPageIndex = getPageIndex(currentPage + 1);
      if (targetPageIndex > pagesIndexes.lastPageIndex) {
        setPagesIndexes({
          firstPageIndex: targetPageIndex - visiblePagesCount + 1,
          lastPageIndex: targetPageIndex,
        });
      }
      handlePageChange(getPage(targetPageIndex));
    }
  }

  function handlePageClick(page) {
    handlePageChange(page);
  }

  return {
    currentPage,
    pages,
    pagesIndexes,
    handlePageClick,
    handlePrevPageClick,
    handleNextPageClick,
  };
}

function getPage(pageIndex) {
  return pageIndex + 1;
}

function getPageIndex(page) {
  return page - 1;
}
