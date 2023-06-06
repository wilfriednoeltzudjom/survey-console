import React from 'react';
import PropTypes from 'prop-types';

import LinkStyled from './Link.styled';

export function Link({ to = '/', children, onClick }) {
  function handleClick(evt) {
    if (onClick) {
      evt.preventDefault();
      onClick();
    }
  }

  return (
    <LinkStyled href={to} onClick={handleClick}>
      {children}
    </LinkStyled>
  );
}
Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
