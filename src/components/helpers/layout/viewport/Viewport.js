import React from 'react';
import PropTypes from 'prop-types';

import ViewportStyled from './Viewport.styled';

export function Viewport({ variant = 'private', children }) {
  const props = { variant };

  return (
    <ViewportStyled className={variant} {...props}>
      <main>{children}</main>
    </ViewportStyled>
  );
}
Viewport.propTypes = {
  variant: PropTypes.oneOf(['private', 'public']),
  children: PropTypes.node,
};
