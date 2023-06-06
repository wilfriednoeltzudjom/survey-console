import React from 'react';
import PropTypes from 'prop-types';

import userIcon from './assets/user.svg';

import AvatarStyled from './Avatar.styled';

export function Avatar({ size = 'md', variant = 'borderless', src, onClick }) {
  const props = { size, variant };

  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <AvatarStyled {...props} onClick={handleClick}>
      <img src={src || userIcon} alt="" />
    </AvatarStyled>
  );
}
Avatar.propTypes = {
  size: PropTypes.oneOf(['md', 'xxl']),
  variant: PropTypes.oneOf(['borderless', 'bordered']),
  src: PropTypes.string,
  onClick: PropTypes.func,
};
