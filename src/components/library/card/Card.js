import React from 'react';
import PropTypes from 'prop-types';

import CardStyled from './Card.styled';

export function Card({ children, style = {} }) {
  return (
    <CardStyled className="card" style={style}>
      {children}
    </CardStyled>
  );
}
Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
};
