import React from 'react';
import PropTypes from 'prop-types';

import zIndices from '../../../config/zIndices';

import OverlayStyled from './Overlay.styled';

export function Overlay({ zIndex = zIndices.overlay, align, variant = 'dark', children, onClick }) {
  const props = { zIndex, align, variant };

  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <OverlayStyled {...props} onClick={handleClick}>
      <main>{children}</main>
    </OverlayStyled>
  );
}
Overlay.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
  zIndex: PropTypes.number,
  align: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
