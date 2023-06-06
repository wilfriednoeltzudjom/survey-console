import styled from 'styled-components';

import { fadeIn } from '../../../config/animations';
import colors from '../../../config/colors';
import zIndices from '../../../config/zIndices';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${getJustifyContent};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${getBackground};
  z-index: ${getZIndex};
  animation: ${fadeIn} 400ms forwards;
  perspective: 1000px;
  overflow: hidden;

  > main {
    display: flex;
    justify-content: center;
    padding: 5rem;
  }
`;

function getJustifyContent({ align }) {
  return align ? align : 'initial';
}

function getBackground({ variant }) {
  return colors.overlay[variant];
}

function getZIndex({ zIndex }) {
  return zIndex || zIndices.overlay;
}
