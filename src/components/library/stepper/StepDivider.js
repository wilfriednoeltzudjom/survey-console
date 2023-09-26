import React from 'react';
import PropTypes from 'prop-types';

import StepDividerStyled from './StepDivider.styled';

export function StepDivider({ position = 0, activePosition = 0 }) {
  const props = { position, activePosition };

  return <StepDividerStyled {...props} />;
}
StepDivider.propTypes = {
  position: PropTypes.number,
  activePosition: PropTypes.number,
};
