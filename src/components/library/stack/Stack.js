import React from 'react';
import PropTypes from 'prop-types';

import StackStyled from './Stack.styled';

export function Stack({ orientation = 'horizontal', spacing = 0, justify = 'flex-start', align = '', children }) {
  const defaultAlign = align ? align : orientation === 'horizontal' ? 'center' : 'flex-start';
  const props = { orientation, spacing, justify, align: defaultAlign };

  return <StackStyled {...props}>{children}</StackStyled>;
}
Stack.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  spacing: PropTypes.number,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
};
