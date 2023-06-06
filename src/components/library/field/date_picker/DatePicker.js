import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-date-picker';

import { toDate } from '../../../../_helpers/date.helper';
import { assignAdditionalProps, formatFormLabel, joinClassNames } from '../../../../_helpers/library.helper';
import { fieldPropTypes } from '../../../../_helpers/propTypes.schemas';

import { Icon } from '../../icon';
import DatePickerStyled from './DatePicker.styled';

export function DatePicker({ id, name, label, comment, defaultValue, disabled, required, size, minDate, maxDate, fluid, index, onChange }) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (defaultValue) setValue(toDate(defaultValue));
  }, [defaultValue]);

  const props = {};
  assignAdditionalProps(props, { minDate, maxDate, size });

  function handleChange(date) {
    setValue(date);
    onChange({ name, value: date });
  }

  return (
    <DatePickerStyled className={joinClassNames('field-date', disabled ? 'disabled' : '')} fluid={fluid} disabled={disabled} {...props}>
      {label && (
        <label htmlFor={id}>
          {formatFormLabel(label, { required, index })} {comment && <span>({comment})</span>}
        </label>
      )}
      <main>
        <ReactDatePicker
          {...props}
          locale="fr-Fr"
          calendarClassName="calendar"
          clearIcon={<Icon name="close" colorScheme="primary" animated={!disabled} />}
          calendarIcon={<Icon name="calendar" colorScheme="primary" animated={!disabled} />}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
        <div />
      </main>
    </DatePickerStyled>
  );
}
DatePicker.propTypes = fieldPropTypes;
