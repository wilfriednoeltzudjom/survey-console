import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { isNonEmptyObject } from '../../../../_helpers/dataValidator.helper';
import { LABEL_SELECT } from '../../../../_helpers/labels';
import { formatFormLabel, joinClassNames } from '../../../../_helpers/library.helper';

import useOutsideClick from '../../../hooks/useOutsideClick';
import { Icon } from '../../icon';
import SelectStyled from './Select.styled';

export function Select({ id, name, label, placeholder = LABEL_SELECT(), comment, defaultOption, options, required, disabled, fluid, clearIconShown = true, onChange }) {
  const [selectedOption, setSelectedOption] = useState();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if ((isNonEmptyObject(defaultOption) && !selectedOption) || (isNonEmptyObject(defaultOption) && defaultOption.label !== selectedOption.label)) setSelectedOption(defaultOption);
  }, [defaultOption, selectedOption]);

  useOutsideClick(id, () => {
    setShown(false);
  });

  const props = { id, name, placeholder, defaultOption, options, disabled, required, fluid, shown };
  const displayedValue = formatDisplayedValue(selectedOption, placeholder);

  function handleClick() {
    if (disabled) return;

    setShown(!shown);
  }

  function handleSelect(option) {
    setSelectedOption(option);
    onChange({ name, value: option.value });
    setShown(false);
  }

  function handleClear() {
    setSelectedOption();
    onChange({ name, value: null });
  }

  return (
    <SelectStyled {...props}>
      <main>
        {label && (
          <label htmlFor={id}>
            {formatFormLabel(label, { required })}
            {comment && <span>({comment})</span>}
          </label>
        )}
        <div className={getInputClassName(displayedValue, shown, selectedOption)} id={id} onClick={handleClick}>
          {displayedValue && <span className={getContentClassName(selectedOption)}>{displayedValue}</span>}
          <aside>
            {isNonEmptyObject(selectedOption) && clearIconShown && <Icon className="icon-close" name="close" colorScheme="primary" animated onClick={handleClear} />}
            <Icon className="icon-expand" name="expand" colorScheme="primary" />
          </aside>
        </div>
      </main>
      {shown && (
        <footer>
          <ul>
            {options.map((option) => (
              <li className={getOptionClassName(selectedOption, option)} key={option.label} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </footer>
      )}
    </SelectStyled>
  );
}
Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  comment: PropTypes.string,
  placeholder: PropTypes.string,
  defaultOption: PropTypes.shape({
    label: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({})),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  clearIconShown: PropTypes.bool,
  onChange: PropTypes.func,
};

function getInputClassName(displayedValue, shown, selectedOption) {
  const contentClassName = displayedValue ? 'content' : '';
  const focusClassName = shown ? 'focused' : '';
  const optionClassName = selectedOption?.colorScheme || '';

  return joinClassNames(contentClassName, focusClassName, optionClassName);
}

function getContentClassName(selectedOption) {
  const className = isNonEmptyObject(selectedOption) ? 'content-option ' : 'content-placeholder ';

  return className.concat(selectedOption?.colorScheme || '').trim();
}

function formatDisplayedValue(selectedOption, placeholder) {
  return selectedOption?.label || placeholder || '';
}

function getOptionClassName(selectedOption, option) {
  const className = selectedOption?.label === option.label ? 'selected ' : '';

  return className.concat(option.colorScheme || '').trim();
}
