import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';

export default styled.div`
  position: relative;
  width: ${getWidth};
  height: ${getHeight};
  display: inline-block;
  border: ${getBorder};
  border-radius: 50%;
  cursor: ${getCursor};

  > img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

function getWidth({ size }) {
  return dimensions.avatar.width[size];
}

function getHeight({ size }) {
  return dimensions.avatar.height[size];
}

function getBorder({ variant, colorScheme }) {
  return { bordered: `2px solid ${colors[colorScheme]}`, borderless: 'none' }[variant];
}

function getCursor({ onClick }) {
  return onClick ? 'pointer' : 'initial';
}
