import React from 'react';
import PropTypes from 'prop-types';

import { LABEL_APP_NAME } from '../../../../_helpers/labels';

import ContainerStyled from './Container.styled';
import { Text } from '../../../library';

export function Container({ variant = 'private', children }) {
  const props = { variant };

  return (
    <ContainerStyled className={variant} {...props}>
      {variant === 'public' && (
        <header>
          <Text size="xxl" colorScheme="primary" weight="black">
            {LABEL_APP_NAME}
          </Text>
        </header>
      )}
      {children}
    </ContainerStyled>
  );
}
Container.propTypes = {
  variant: PropTypes.oneOf(['private', 'public']),
  children: PropTypes.node,
};
