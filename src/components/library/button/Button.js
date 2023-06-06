import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';

import { assignAdditionalProps, createRipple } from '../../../_helpers/library.helper';
import { isValidValue } from '../../../_helpers/dataValidator.helper';

import ButtonStyled from './Button.styled';

export function Button({ id, fluid = false, variant = 'filled', size = 'md', colorScheme = 'primary', disabled = false, icon, children, onClick }) {
  const props = { variant, size, colorScheme, disabled, fluid, validChildren: isValidValue(children) };
  assignAdditionalProps(props, { id });

  function handleClick(evt) {
    createRipple(evt);
    if (onClick) onClick(evt);
  }

  return (
    <ButtonStyled className="button" {...props} onClick={handleClick}>
      <main>
        {isValidElement(icon) && cloneElement(icon)}
        {children}
      </main>
    </ButtonStyled>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md']),
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'red', 'white']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
