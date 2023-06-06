import React from 'react';
import PropTypes from 'prop-types';

import BadgeStyled from './Badge.styled';

export function Badge({ variant = 'filled', colorScheme = 'primary', children }) {
  const props = { variant, colorScheme };

  return (
    <BadgeStyled className={variant} {...props}>
      <main>{children}</main>
    </BadgeStyled>
  );
}
Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'gray', 'error', 'blue', 'yellow', 'purple']),
};
