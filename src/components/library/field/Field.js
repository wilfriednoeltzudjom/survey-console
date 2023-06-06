import React, { useRef } from 'react';

import { generateId } from '../../../_helpers/dataGenerator.helper';
import { fieldPropTypes } from '../../../_helpers/propTypes.schemas';
import { toEndOfDay } from '../../../_helpers/date.helper';

import { FieldError } from '../field_error';
import { Input } from './input';
import { Textarea } from './textarea';
import { Checkbox } from './checkbox';
import { Radio } from './radio';
import { Select } from './select';
import { DatePicker } from './date_picker';
import FieldStyled from './Field.styled';

const fields = {
  text: Input,
  number: Input,
  email: Input,
  password: Input,
  tel: Input,
  textarea: Textarea,
  checkbox: Checkbox,
  radio: Radio,
  select: Select,
  date: DatePicker,
};

export function Field({
  id,
  type,
  options = [],
  required = false,
  disabled = false,
  error,
  maxDate = toEndOfDay(),
  fluid = false,
  size = 'md',
  weight = 'regular',
  index,
  onChange,
  onBlur,
  ...restProps
}) {
  const defaultId = useRef(id || generateId());
  const SelectedField = fields[type];
  if (!SelectedField) throw new Error(`Unsupported type ${type}`);

  function handleChange(params) {
    if (onChange) onChange({ ...params, index });
  }

  function handleBlur(params) {
    if (onBlur) onBlur({ ...params, index });
  }

  return (
    <FieldStyled>
      <SelectedField
        id={defaultId.current}
        type={type}
        options={options}
        required={required}
        disabled={disabled}
        maxDate={maxDate}
        size={size}
        fluid={fluid}
        weight={weight}
        index={index}
        onChange={handleChange}
        onBlur={handleBlur}
        {...restProps}
      />
      {error && <FieldError>{error}</FieldError>}
    </FieldStyled>
  );
}
Field.propTypes = fieldPropTypes;
