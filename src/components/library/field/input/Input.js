import React, { cloneElement, isValidElement } from 'react';

import { assignAdditionalProps, formatFormLabel } from '../../../../_helpers/library.helper';
import { fieldPropTypes } from '../../../../_helpers/propTypes.schemas';

import InputStyled from './Input.styled';

export function Input({
  id,
  type,
  label,
  comment,
  name,
  defaultValue,
  value,
  placeholder,
  min,
  max,
  required,
  disabled,
  icon,
  fluid,
  size,
  weight,
  index,
  preventDecimal,
  onChange,
  onBlur,
}) {
  const props = { id, name, type, disabled, required, defaultValue, placeholder };
  assignAdditionalProps(props, { value, min, max });

  function handleKeyDown(evt) {
    if (type !== 'number') return;

    const numberValidationRegex = preventDecimal ? /[0-9]|\bBackspace\b|\bArrowLeft\b|\bArrowRight\b|\bTab\b/ : /[0-9.,]|\bBackspace\b|\bArrowLeft\b|\bArrowRight\b|\bTab\b/;
    if (!numberValidationRegex.test(evt.key)) evt.preventDefault();
  }

  function handleChange({ target: { value, valueAsNumber } }) {
    onChange({ name, value: getValue(value, valueAsNumber) });
  }

  function handleBlur({ target: { value, valueAsNumber } }) {
    onBlur({ name, value: getValue(value, valueAsNumber) });
  }

  function handleWheel(evt) {
    if (evt.target) evt.target.blur();
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
        <input className={getInputClassName(icon)} {...props} autoComplete="off" onKeyDown={handleKeyDown} onWheel={handleWheel} onChange={handleChange} onBlur={handleBlur} />
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
