import React from 'react';

import { assignAdditionalProps } from '../../../../_helpers/library.helper';
import { fieldPropTypes } from '../../../../_helpers/propTypes.schemas';

import RadioStyled from './Radio.styled';

export function Radio({ id, name, label, checked, required, disabled, defaultChecked, onChange }) {
  const props = { id, name, required, disabled };
  assignAdditionalProps(props, { checked, defaultChecked });

  function handleChange({ target: { checked, value } }) {
    onChange({ name, checked, value });
  }

  return (
    <RadioStyled disabled={disabled}>
      <input type="radio" {...props} onChange={handleChange} />
      <label htmlFor={id}>
        <span />
        <span>{label}</span>
      </label>
    </RadioStyled>
  );
}
Radio.propTypes = fieldPropTypes;
