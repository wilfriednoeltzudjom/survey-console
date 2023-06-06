import React from 'react';
import PropTypes from 'prop-types';

import LoaderStyled from './Loader.styled';

export function Loader({ colorScheme }) {
  return (
    <LoaderStyled colorScheme={colorScheme}>
      <span />
      <span />
      <span />
    </LoaderStyled>
  );
}
Loader.propTypes = {
  colorScheme: PropTypes.string,
};
