import React from 'react';
import PropTypes from 'prop-types';

import SortingArrowsStyled from './SortingArrows.styled';
import { SortingArrow } from './SortingArrow';

export function SortingArrows({ colorScheme = 'arrow', size = 'xs', onSortAscend, onSortDescend }) {
  return (
    <SortingArrowsStyled>
      <SortingArrow variant="asc" colorScheme={colorScheme} size={size} onClick={onSortAscend} />
      <SortingArrow variant="desc" colorScheme={colorScheme} size={size} onClick={onSortDescend} />
    </SortingArrowsStyled>
  );
}
SortingArrows.propTypes = {
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'arrow']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  onSortAscend: PropTypes.func,
  onSortDescend: PropTypes.func,
};
