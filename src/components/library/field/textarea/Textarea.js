import React from 'react';

import { assignAdditionalProps, formatFormLabel } from '../../../../_helpers/library.helper';
import { fieldPropTypes } from '../../../../_helpers/propTypes.schemas';

import TextareaStyled from './Textarea.styled';

export function Textarea({ id, label, name, defaultValue, value, placeholder, required, disabled, fluid, onChange, onBlur }) {
  const props = { id, name, required, disabled, defaultValue, placeholder };
  assignAdditionalProps(props, { value });

  function handleChange({ target: { value } }) {
    onChange({ name, value });
  }

  function handleBlur({ target: { value } }) {
    onBlur({ name, value });
  }

  return (
    <TextareaStyled fluid={fluid}>
      {label && <label htmlFor={id}>{formatFormLabel(label, { required })}</label>}
      <main>
        <textarea rows="10" {...props} onChange={handleChange} onBlur={handleBlur} />
        <div />
      </main>
    </TextareaStyled>
  );
}
Textarea.propTypes = fieldPropTypes;
