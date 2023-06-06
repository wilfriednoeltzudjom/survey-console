import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import NavbarStyled from './Navbar.styled';

export function Navbar({ items = [] }) {
  function handleNavClick(evt, { disabled }) {
    if (disabled) evt.preventDefault();
  }

  return (
    <NavbarStyled className="navbar">
      {items.map(({ label, url, disabled }, index) => (
        <NavLink className={disabled ? 'disabled' : ''} key={index} to={url} onClick={(evt) => handleNavClick(evt, { disabled })}>
          {label}
        </NavLink>
      ))}
    </NavbarStyled>
  );
}
Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
