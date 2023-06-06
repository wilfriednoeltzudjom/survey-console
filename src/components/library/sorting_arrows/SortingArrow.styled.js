import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import durations from '../../../config/durations';

export default styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: ${getHeight} solid transparent;
  border-right: ${getHeight} solid transparent;
  border-bottom: ${getWidth} solid ${getBackgroundColor};
  transform: ${getTransform};
  transition: border-bottom-color ${durations.button.transition} ease-out;
  cursor: pointer;

  :hover {
    border-bottom-color: ${(props) => getBackgroundColor(props, { hovered: true })};
  }
`;

function getBackgroundColor(props, { hovered = false } = {}) {
  const { colorScheme } = props;

  return hovered ? colors[colorScheme.concat('Light')] : colors[colorScheme];
}

function getTransform({ variant }) {
  return { asc: 'none', desc: 'rotate(180deg)' }[variant];
}

function getWidth({ size }) {
  return dimensions.sortingArrow.width[size];
}

function getHeight({ size }) {
  return dimensions.sortingArrow.height[size];
}
