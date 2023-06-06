import React, { cloneElement, memo } from 'react';
import PropTypes from 'prop-types';

import { isString, isValidValue } from '../../../_helpers/dataValidator.helper';
import { formatSearch } from '../../../_helpers/diacritics.helper';
import { TABLE_DATA_TYPES } from '../../../_helpers/enums';
import { formatAmount, formatCode, formatPhoneNumber } from '../../../_helpers/types.helper';
import { formatDate, formatDateTime } from '../../../_helpers/date.helper';

import { SortingArrows } from '../sorting_arrows/SortingArrows';
import { Button, Field, Icon, Menu, Pagination, Text, Loader } from '..';
import { TableEmpty } from './TableEmpty';
import useTable from './hooks/useTable';
import TableStyled from './Table.styled';

export const itemsCountPerPageOptions = [5, 10, 20];

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      dataType: PropTypes.oneOf(Object.values(TABLE_DATA_TYPES)),
      defaultValue: PropTypes.any,
      sortable: PropTypes.bool,
      styles: PropTypes.shape({
        width: PropTypes.string,
      }),
      textStyles: PropTypes.shape({
        colorScheme: PropTypes.oneOf(['primary', 'secondary']),
        weight: PropTypes.string,
      }),
      formatter: PropTypes.func,
      render: PropTypes.func,
    })
  ).isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      label: PropTypes.string,
      isDeletable: PropTypes.func,
      onClick: PropTypes.func,
    })
  ),
  requesting: PropTypes.bool,
  noDataMessage: PropTypes.string,
  searchableDataIndexes: PropTypes.arrayOf(PropTypes.string),
  onSearch: PropTypes.func,
  onResetSearch: PropTypes.func,
};

function UnMemorizedTable({ columns, dataSource = [], actions, requesting = false, noDataMessage, searchableDataIndexes = [], onSearch, onResetSearch }) {
  const {
    currentItems,
    pagesCount,
    currentPage,
    currentSearchString,
    currentItemsCountPerPage,
    handlePageChange,
    handleItemsCountPerPageChange,
    handleSortAscend,
    handleSortDesend,
    handleSearch,
  } = useTable({
    dataSource,
    itemsCountPerPageOptions,
    onSearch,
    onResetSearch,
  });
  const props = { actions };

  return (
    <TableStyled {...props}>
      <header>
        <main>
          <Field type="text" placeholder="Rechercher" icon={<Icon name="search" />} disabled={dataSource.length === 0} onChange={handleSearch} />
        </main>
        <aside>
          <Button variant="outlined" icon={<Icon name="download" />} disabled={dataSource.length === 0}>
            Export CSV
          </Button>
        </aside>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              {columns.map(({ key, title, sortable = false, dataIndex, formatter, styles = {} }) => (
                <th key={key} style={styles}>
                  <main>
                    <span>{title}</span>
                    {sortable && <SortingArrows onSortAscend={() => handleSortAscend({ dataIndex, formatter })} onSortDescend={() => handleSortDesend({ dataIndex, formatter })} />}
                  </main>
                </th>
              ))}
              {actions && (
                <th>
                  <main>Actions</main>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, itemIndex) => (
              <tr key={itemIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={getCellKey(column, columnIndex)} style={getCellStyle(column)}>
                    {displayCellContent(column, item, searchableDataIndexes, currentSearchString)}
                  </td>
                ))}
                {actions && <td>{displayActions(actions, item)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {requesting ? (
        <Loader colorScheme="primary" />
      ) : dataSource.length > 0 ? (
        <footer>
          <Field
            type="select"
            clearIconShown={false}
            options={getSelectItemsCountPerPageOptions()}
            defaultOption={toSelectOption(currentItemsCountPerPage)}
            onChange={handleItemsCountPerPageChange}
          />
          <Pagination pagesCount={pagesCount} page={currentPage} onPageChange={handlePageChange} />
        </footer>
      ) : (
        <TableEmpty>{noDataMessage}</TableEmpty>
      )}
    </TableStyled>
  );
}
UnMemorizedTable.propTypes = propTypes;

function getCellKey(column, columnIndex) {
  return [column.key, columnIndex].join('-');
}

function getCellStyle(column) {
  return column.dataType === TABLE_DATA_TYPES.AMOUNT ? { textAlign: 'right' } : {};
}

function displayCellContent(column, item, searchableDataIndexes, currentSearchString) {
  if (!column.dataIndex && !column.render) throw new Error('Each column must have either <dataIndex> or <render> properties');

  return column.render ? column.render(item) : formatCellValue(column, item, searchableDataIndexes, currentSearchString);
}

function formatCellValue(column, item, searchableDataIndexes, currentSearchString) {
  const { dataIndex, dataType } = column;
  const value = item[dataIndex];
  if (!column.dataType || !Object.values(TABLE_DATA_TYPES).includes(dataType)) return renderValue(column, value, searchableDataIndexes, currentSearchString);

  const strategies = {
    [TABLE_DATA_TYPES.CODE]: formatCode,
    [TABLE_DATA_TYPES.DATE]: formatDate,
    [TABLE_DATA_TYPES.DATE_TIME]: formatDateTime,
    [TABLE_DATA_TYPES.AMOUNT]: formatAmount,
    [TABLE_DATA_TYPES.PHONE]: formatPhoneNumber,
  };

  return renderValue(column, strategies[dataType](value), searchableDataIndexes, currentSearchString);
}

function renderValue(column, value, searchableDataIndexes = [], currentSearchString) {
  const { dataIndex, defaultValue = '', textStyles = {} } = column;
  const finalValue = value || defaultValue;
  const additionalTextStyles = {};
  if (defaultValue && !value) additionalTextStyles.colorScheme = 'gray';

  if (isValidValue(value) && isString(value) && isValidValue(currentSearchString) && searchableDataIndexes.includes(dataIndex)) {
    const sanitizedValue = formatSearch(value);
    const sanitizedCurrentSearchString = formatSearch(currentSearchString);
    const { searchStringStartIndex, searchStringEndIndex } = extractSearchStringIndexesInValue(sanitizedCurrentSearchString, sanitizedValue);
    if (searchStringStartIndex < 0) return toTextComponent(finalValue, textStyles);

    const valueAsTextsComponents = splitValueAsTextsComponents(value, searchStringStartIndex, searchStringEndIndex);

    return valueAsTextsComponents.map((text, index) => <React.Fragment key={index}>{cloneElement(text, textStyles)}</React.Fragment>);
  }

  return toTextComponent(finalValue, { ...textStyles, ...additionalTextStyles });
}

function extractSearchStringIndexesInValue(searchString, value) {
  const searchStringStartIndex = value.indexOf(searchString);
  const searchStringEndIndex = searchString.length + searchStringStartIndex - 1;

  return { searchStringStartIndex, searchStringEndIndex };
}

function toTextComponent(value, textStyles = {}) {
  return <Text {...textStyles}>{value}</Text>;
}

function splitValueAsTextsComponents(value, searchStringStartIndex, searchStringEndIndex) {
  const valueAsTextsComponents = [];
  if (searchStringStartIndex > 0) {
    valueAsTextsComponents.push(<Text>{value.substring(0, searchStringStartIndex)}</Text>);
  }
  valueAsTextsComponents.push(<Text highlight>{value.substring(searchStringStartIndex, searchStringEndIndex + 1)}</Text>);
  if (searchStringEndIndex < value.length - 1) {
    valueAsTextsComponents.push(<Text>{value.substring(searchStringEndIndex + 1, value.length)}</Text>);
  }

  return valueAsTextsComponents;
}

function displayActions(actions, item) {
  return (
    <Menu trigger={<Button variant="ghost" size="sm" icon={<Icon name="more" />} />}>
      {filterActions(actions, item).map(({ icon, label, isDisabled, onClick }, index) => (
        <Menu.Item
          key={index}
          label={label}
          icon={icon}
          disabled={isActionDisabled(isDisabled, item)}
          onClick={() => {
            if (onClick) onClick(item);
          }}
        />
      ))}
    </Menu>
  );
}

function filterActions(actions, item) {
  return actions.filter(({ isDeletable }) => (isValidValue(isDeletable) ? isDeletable(item) : true));
}

function isActionDisabled(isDisabled, item) {
  return isDisabled ? isDisabled(item) : false;
}

function getSelectItemsCountPerPageOptions() {
  return itemsCountPerPageOptions.map(toSelectOption);
}

function toSelectOption(value) {
  return { label: value.toString(), value };
}

export const Table = memo(UnMemorizedTable);

Table.propTypes = propTypes;
