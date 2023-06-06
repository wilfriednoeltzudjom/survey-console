import React from 'react';

import { assignAdditionalProps } from '../../../../_helpers/library.helper';
import { fieldPropTypes } from '../../../../_helpers/propTypes.schemas';

import CheckboxStyled from './Checkbox.styled';

export function Checkbox({ id, name, label, checked, required, disabled, defaultChecked, onChange }) {
  const props = { id, name, required, disabled };
  assignAdditionalProps(props, { checked, defaultChecked });

  function handleChange({ target: { value, checked } }) {
    onChange({ name, value, checked });
  }

  return (
    <CheckboxStyled disabled={disabled}>
      <input type="checkbox" {...props} onChange={handleChange} />
      <label htmlFor={id}>
        <span />
        <span>{label}</span>
      </label>
    </CheckboxStyled>
  );
}
Checkbox.propTypes = fieldPropTypes;
