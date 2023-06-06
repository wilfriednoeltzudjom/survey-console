import React from 'react';
import PropTypes from 'prop-types';

import zIndices from '../../../config/zIndices';

import { Loader, Overlay, Portal } from '..';
import LoadingStyled from './Loading.styled';

export function Loading({ shown = false }) {
  if (!shown) return null;

  return (
    <Portal>
      <Overlay align="center" variant="dark" zIndex={zIndices.loading}>
        <LoadingStyled>
          <Loader colorScheme="white" size="lg" />
        </LoadingStyled>
      </Overlay>
    </Portal>
  );
}
Loading.propTypes = {
  shown: PropTypes.bool,
};
