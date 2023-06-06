import React, { cloneElement, isValidElement } from 'react';

import { assignAdditionalProps, formatFormLabel } from '../../../../_helpers/library.helper';
import { fieldPropTypes } from '../../../../_helpers/propTypes.schemas';

import InputStyled from './Input.styled';

export function Input({ id, type, label, comment, name, defaultValue, value, placeholder, min, max, required, disabled, icon, fluid, size, weight, index, onChange, onBlur }) {
  const props = { id, name, type, disabled, required, defaultValue, placeholder };
  assignAdditionalProps(props, { value, min, max });

  function handleChange({ target: { value, valueAsNumber } }) {
    onChange({ name, value: getValue(value, valueAsNumber) });
  }

  function handleBlur({ target: { value, valueAsNumber } }) {
    onBlur({ name, value: getValue(value, valueAsNumber) });
  }

  function getValue(value, valueAsNumber) {
    return type === 'number' ? valueAsNumber || 0 : value;
  }

  return (
    <InputStyled disabled={disabled} fluid={fluid} size={size} weight={weight}>
      {label && (
        <label htmlFor={id}>
          {formatFormLabel(label, { required, index })}
          {comment && <span>({comment})</span>}
        </label>
      )}
      <main>
        <input className={getInputClassName(icon)} {...props} autoComplete="off" onChange={handleChange} onBlur={handleBlur} />
        <div />
        {isValidElement(icon) && cloneElement(icon)}
      </main>
    </InputStyled>
  );
}
Input.propTypes = fieldPropTypes;

function getInputClassName(icon) {
  return icon ? 'icon' : '';
}
