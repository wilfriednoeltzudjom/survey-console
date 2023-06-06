import React from 'react';
import PropTypes from 'prop-types';

import FieldErrorStyled from './FieldError.styled';

export function FieldError({ children }) {
  return <FieldErrorStyled role="alert">{children}</FieldErrorStyled>;
}
FieldError.propTypes = {
  children: PropTypes.node,
};
