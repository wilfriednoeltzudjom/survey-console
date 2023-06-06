import React from 'react';
import PropTypes from 'prop-types';

import zIndices from '../../../config/zIndices';
import { LABEL_BUTTON_OK } from '../../../_helpers/labels';

import { Button, Icon, Overlay, Portal } from '..';
import DialogStyled from './Dialog.styled';
import htmlParserHelper from '../../../_helpers/htmlParser.helper';

const iconStrategies = {
  success: () => <Icon name="check-circle" colorScheme="secondary" size="xxl" />,
  failure: () => <Icon name="error-circle" colorScheme="error" size="xxl" />,
};

export function Dialog({ shown = false, variant = 'success', message, onHide }) {
  if (!shown) return null;

  function handleHide() {
    if (onHide) onHide();
  }

  return (
    <Portal>
      <Overlay zIndex={zIndices.dialog}>
        <DialogStyled>
          {['front', 'back'].map((cardClassName) => (
            <div key={cardClassName} className={cardClassName}>
              <main>
                {displayIcon(variant)}
                {message && <span>{htmlParserHelper.parseHTML(message)}</span>}
              </main>
              <footer>
                <Button colorScheme="secondary" onClick={handleHide}>
                  {LABEL_BUTTON_OK()}
                </Button>
              </footer>
            </div>
          ))}
        </DialogStyled>
      </Overlay>
    </Portal>
  );
}
Dialog.propTypes = {
  shown: PropTypes.bool,
  variant: PropTypes.oneOf(['success', 'failure']),
  message: PropTypes.string,
  onHide: PropTypes.func,
};

function displayIcon(variant) {
  const selectedStrategy = iconStrategies[variant];

  return selectedStrategy && selectedStrategy();
}
