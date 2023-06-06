import React from 'react';
import PropTypes from 'prop-types';

import zIndices from '../../../config/zIndices';
import { LABEL_CONFIRMATION } from '../../../_helpers/labels';

import { Overlay, Portal, Text, Button, Icon } from '..';
import AlertStyled from './Alert.styled';
import htmlParserHelper from '../../../_helpers/htmlParser.helper';

export function Alert({ shown = false, title, message, actions, actionTitle, actionCallback, onHide }) {
  if (!shown) return null;

  const props = { shown };

  function handleHide() {
    if (actionCallback) actionCallback();
    if (onHide) onHide();
  }

  return (
    <Portal>
      <Overlay zIndex={zIndices.alert}>
        <AlertStyled {...props}>
          <header>
            <Text colorScheme="black" size="lg" weight="bold">
              {title || LABEL_CONFIRMATION()}
            </Text>
            <Button variant="ghost" icon={<Icon name="close" />} onClick={handleHide} />
          </header>
          {message && <main>{htmlParserHelper.parseHTML(message)}</main>}
          {actions && <footer>{actions}</footer>}
          {actionTitle && (
            <footer>
              <Button colorScheme="secondary" onClick={handleHide}>
                {actionTitle}
              </Button>
            </footer>
          )}
        </AlertStyled>
      </Overlay>
    </Portal>
  );
}
Alert.propTypes = {
  shown: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.node,
  actions: PropTypes.node,
  actionTitle: PropTypes.string,
  actionCallback: PropTypes.func,
  onHide: PropTypes.func,
};
