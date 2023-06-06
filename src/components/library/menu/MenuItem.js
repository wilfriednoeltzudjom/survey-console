import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';

import MenuItemStyled from './MenuItem.styled';

export function MenuItem({ icon, label, disabled = false, onClick, onMenuItemClick }) {
  function handleClick() {
    if (onClick) onClick();
    onMenuItemClick();
  }

  return (
    <MenuItemStyled disabled={disabled} onClick={handleClick}>
      <main>
        {isValidElement(icon) && cloneElement(icon)} <span>{label}</span>
      </main>
    </MenuItemStyled>
  );
}
MenuItem.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMenuItemClick: PropTypes.func,
};
