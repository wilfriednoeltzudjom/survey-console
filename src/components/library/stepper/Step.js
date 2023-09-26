import React from 'react';
import PropTypes from 'prop-types';

import StepStyled from './Step.styled';

export function Step({ step = {}, active = false }) {
  const props = { active };

  return (
    <StepStyled {...props}>
      <main>
        <div>{step.position}</div>
        <span>{step.title}</span>
      </main>
    </StepStyled>
  );
}
Step.propTypes = {
  step: PropTypes.shape({
    title: PropTypes.string,
    position: PropTypes.number,
  }),
  active: PropTypes.bool,
};
