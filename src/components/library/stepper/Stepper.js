import React from 'react';
import PropTypes from 'prop-types';

import StepperStyled from './Stepper.styled';
import { Step } from './Step';
import { StepDivider } from './StepDivider';

export function Stepper({ steps = [], activeStep = {} }) {
  return (
    <StepperStyled>
      {steps.map((step, index) => (
        <React.Fragment key={step.position}>
          <Step step={step} active={activeStep.position >= step.position} />
          {index < steps.length - 1 && <StepDivider position={index + 1} activePosition={activeStep.position} />}
        </React.Fragment>
      ))}
    </StepperStyled>
  );
}
Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })
  ),
  activeStep: PropTypes.shape({
    title: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
  }),
};
