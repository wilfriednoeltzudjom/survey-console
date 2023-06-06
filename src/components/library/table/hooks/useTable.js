import { useState, useEffect } from 'react';

import { isDateValue } from '../../../../_helpers/dataValidator.helper';
import { TABLE_SORTING_ORDERS } from '../../../../_helpers/enums';

export default function ({ dataSource = [], itemsCountPerPageOptions, onSearch, onResetSearch }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [currentItemsCountPerPage, setCurrentItemsCountPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentSearchString, setCurrentSearchString] = useState('');

  function updateCurentItems(formattedDataSource = [], page = 1, itemsCountPerPage = itemsCountPerPageOptions[0]) {
    const startIndex = (page - 1) * itemsCountPerPage;
    const endIndex = startIndex + itemsCountPerPage;
    setCurrentItems(formattedDataSource.slice(startIndex, endIndex));
    setCurrentPage(page);
    if (itemsCountPerPage !== currentItemsCountPerPage) setCurrentItemsCountPerPage(itemsCountPerPage);
  }

  function updatePageCount(formattedDataSource = [], itemsCountPerPage = itemsCountPerPageOptions[0]) {
    const pagesCountDecimalValue = formattedDataSource.length / itemsCountPerPage;
    const pagesCountRoundedValue = formattedDataSource.length % itemsCountPerPage === 0 ? pagesCountDecimalValue : Math.ceil(pagesCountDecimalValue);
    setPagesCount(pagesCountRoundedValue);
  }

  function handlePageChange(page) {
    updateCurentItems(dataSource, page, currentItemsCountPerPage);
  }

  function handleItemsCountPerPageChange({ value: itemsCountPerPage }) {
    updateCurentItems(dataSource, 1, itemsCountPerPage);
    updatePageCount(dataSource, itemsCountPerPage);
  }

  function handleSortAscend({ dataIndex, formatter }) {
    if (dataSource.length === 0) return;

    applySorting({ dataIndex, formatter, sortingOrder: TABLE_SORTING_ORDERS.ASCEND });
  }

  function handleSortDesend({ dataIndex, formatter }) {
    if (dataSource.length === 0) return;

    applySorting({ dataIndex, formatter, sortingOrder: TABLE_SORTING_ORDERS.DESCEND });
  }

  function applySorting({ dataIndex, formatter, sortingOrder }) {
    const formattedDataSource = Array.from(dataSource).sort((prevItem, nextItem) => {
      const prevItemValue = formatItemValue(prevItem, dataIndex, formatter);
      const nextItemValue = formatItemValue(nextItem, dataIndex, formatter);
      if (prevItemValue > nextItemValue) return { [TABLE_SORTING_ORDERS.ASCEND]: 1, [TABLE_SORTING_ORDERS.DESCEND]: -1 }[sortingOrder];
      if (prevItemValue < nextItemValue) return { [TABLE_SORTING_ORDERS.ASCEND]: -1, [TABLE_SORTING_ORDERS.DESCEND]: 1 }[sortingOrder];

      return 0;
    });
    updateCurentItems(formattedDataSource, 1, currentItemsCountPerPage);
  }

  function formatItemValue(item, dataIndex, formatter) {
    let formattedItemValue = formatter ? formatter(item[dataIndex]) : item[dataIndex];
    if (isDateValue(formattedItemValue)) formattedItemValue = Date.parse(formattedItemValue);

    return formattedItemValue;
  }

  useEffect(() => {
    updateCurentItems(dataSource);
    updatePageCount(dataSource);
  }, [dataSource]);

  function handleSearch({ value }) {
    setCurrentSearchString(value);
    if (onSearch) onSearch({ searchString: value });
  }

  function handleResetSearch() {
    setCurrentSearchString('');
    if (onResetSearch) onResetSearch();
  }

  return {
    currentItems,
    currentItemsCountPerPage,
    currentPage,
    pagesCount,
    currentSearchString,
    handlePageChange,
    handleItemsCountPerPageChange,
    handleSortAscend,
    handleSortDesend,
    handleSearch,
    handleResetSearch,
  };
}
