import styled from 'styled-components';
import colors from '../../../config/colors';
import durations from '../../../config/durations';

export default styled.span`
  display: inline-block;
  font-size: ${getFontSize};
  color: ${getColor};

  &.animated {
    transition: all ${durations.default} ease-in-out;

    :hover {
      transform: scale(0.8);
      opacity: 0.9;
    }
  }
`;

function getFontSize({ size }) {
  return { sm: '20px', md: '24px', lg: '32px', xl: '48px', xxl: '64px' }[size];
}

function getColor({ colorScheme }) {
  return colorScheme ? colors[colorScheme] : 'inherit';
}
