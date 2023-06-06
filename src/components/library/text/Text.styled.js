import styled from 'styled-components';

import colors from '../../../config/colors';
import { fontSizes } from '../../../config/sizes';
import { getFontWeight } from '../../../_helpers/library.helper';

export default styled.span`
  display: inline-block;
  color: ${getColor};
  font-weight: ${getFontWeight};
  font-size: ${getFontSize};
  background: ${getBackground};
  text-transform: ${getTextTransform};
`;

function getColor({ colorScheme }) {
  return colors[colorScheme];
}

function getFontSize({ size }) {
  return fontSizes[size];
}

function getBackground({ highlight }) {
  return highlight ? colors.success : '';
}

function getTextTransform({ textAppearance }) {
  return textAppearance;
}
