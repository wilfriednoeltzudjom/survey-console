import React, { cloneElement, isValidElement, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { joinClassNames } from '../../../_helpers/library.helper';
import { generateId } from '../../../_helpers/dataGenerator.helper';

import MenuStyled from './Menu.styled';
import { MenuItem } from './MenuItem';
import useOutsideClick from '../../hooks/useOutsideClick';
import { isNonEmptyArray } from '../../../_helpers/dataValidator.helper';

export function Menu({ id, trigger, children }) {
  const defaultId = useRef(id || generateId());
  const [visibility, setVisibility] = useState('');

  useOutsideClick(defaultId.current, () => {
    setVisibility((currentVisibility) => {
      if (currentVisibility === 'shown') return 'hidden';

      return '';
    });
  });

  function handleTriggerClick() {
    setVisibility(getToggledVisibility);
  }

  function getToggledVisibility(currentVisibility) {
    if (currentVisibility === '') return 'shown';
    if (currentVisibility === 'shown') return 'hidden';
    if (currentVisibility === 'hidden') return 'shown';
  }

  function handleMenuItemClick() {
    setVisibility('hidden');
  }

  return (
    <MenuStyled className={joinClassNames(visibility)} id={defaultId.current}>
      <main>{isValidElement(trigger) && cloneElement(trigger, { onClick: handleTriggerClick })}</main>
      {children && (
        <footer>
          {isNonEmptyArray(children)
            ? children.map((child) => cloneElement(child, { key: generateId(), onMenuItemClick: handleMenuItemClick }))
            : cloneElement(children, { onMenuItemClick: handleMenuItemClick })}
        </footer>
      )}
    </MenuStyled>
  );
}
Menu.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  trigger: PropTypes.element.isRequired,
};
Menu.Item = MenuItem;
