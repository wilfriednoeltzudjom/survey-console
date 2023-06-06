import React from 'react';
import PropTypes from 'prop-types';

import { DividerStyled } from './Divider.styled';

export function Divider({ orientation = 'horizontal', size = 'lg' }) {
  const props = { orientation, size };

  return <DividerStyled {...props} />;
}
Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
