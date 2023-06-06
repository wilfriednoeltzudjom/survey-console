import React from 'react';
import PropTypes from 'prop-types';

import SortingArrowStyled from './SortingArrow.styled';

export function SortingArrow({ variant = 'asc', colorScheme = 'primary', size = 'xs', onClick }) {
  const props = { variant, colorScheme, size };

  function handleClick() {
    if (onClick) onClick();
  }

  return <SortingArrowStyled {...props} onClick={handleClick} />;
}
SortingArrow.propTypes = {
  variant: PropTypes.oneOf(['asc', 'desc']),
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'arrow']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  onClick: PropTypes.func,
};
