import React from 'react';
import PropTypes from 'prop-types';

import zIndices from '../../../config/zIndices';

import { Overlay, Portal, Text, Button, Icon } from '..';
import ModalStyled from './Modal.styled';

export function Modal({ shown = false, title, size = 'md', closable = true, hideOnOverlayClick = false, actions, children, onHide }) {
  if (!shown) return null;

  const props = { shown, size, closable };

  function handleHide() {
    if (onHide) onHide();
  }

  function handleOverlayClick() {
    if (hideOnOverlayClick) handleHide();
  }

  return (
    <Portal>
      <Overlay zIndex={zIndices.modal} onClick={handleOverlayClick}>
        <ModalStyled {...props}>
          <header>
            <Text colorScheme="black" size="lg" weight="bold">
              {title}
            </Text>
            {closable && <Button variant="ghost" icon={<Icon name="close" />} onClick={handleHide} />}
          </header>
          {children && <main>{children}</main>}
          {actions && <footer>{actions}</footer>}
        </ModalStyled>
      </Overlay>
    </Portal>
  );
}
Modal.propTypes = {
  shown: PropTypes.bool,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  closable: PropTypes.bool,
  hideOnOverlayClick: PropTypes.bool,
  actions: PropTypes.element,
  children: PropTypes.node,
  onHide: PropTypes.func,
};
