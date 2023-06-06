import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '..';

import TableEmptyStyled from './TableEmpty.styled';

export function TableEmpty({ children }) {
  return (
    <TableEmptyStyled>
      <Icon name="inventory" size="xl" colorScheme="gray" />
      <span>{children}</span>
    </TableEmptyStyled>
  );
}
TableEmpty.propTypes = {
  children: PropTypes.node,
};
