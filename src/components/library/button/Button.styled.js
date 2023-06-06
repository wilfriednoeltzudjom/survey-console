import styled from 'styled-components';
import { ripple } from '../../../config/animations';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import durations from '../../../config/durations';
import { fontSizes } from '../../../config/sizes';

export default styled.button`
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: ${getWidth};
  min-height: ${getMinHeight};
  border: ${getBorder};
  border-radius: ${dimensions.defaults.radius.medium};
  background: ${getBackground};
  font-size: ${fontSizes.md};
  color: ${getColor};
  font-weight: 500;
  transition: all ${durations.button.transition} ease-in-out;
  cursor: ${getCursor};

  :hover {
    background: ${(props) => getBackground(props, { hovered: true })};
  }

  :focus {
    box-shadow: ${(props) => getBoxShadow(props, { focused: true })};
    outline: none;
  }

  > main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${getMainPadding};

    > .icon {
      margin-right: ${getMainIconMarginRight};
    }
  }

  > span {
    &.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ${ripple} 800ms linear;
      background-color: ${getRippleColor};
    }
  }
`;

function getWidth({ validChildren, size, fluid }) {
  return validChildren ? (fluid ? '100%' : 'initial') : dimensions.button.width[size];
}

function getMinHeight({ size }) {
  return dimensions.button.minHeight[size];
}

function getBorder({ variant, colorScheme, disabled }) {
  if (variant !== 'outlined') return 'none';

  return `2px solid ${disabled ? colors.disabled : colors[colorScheme]}`;
}

function getBackground(props, { hovered = false } = {}) {
  const { variant, colorScheme, disabled } = props;
  if (variant !== 'filled') return getNonFilledBackground(colorScheme, hovered, disabled);

  return getFilledBackground(colorScheme, hovered, disabled);
}

function getNonFilledBackground(colorScheme, hovered, disabled) {
  return disabled
    ? 'transparent'
    : hovered
    ? { primary: 'rgba(90, 76, 67, 0.2)', secondary: 'rgba(195, 186, 133, 0.2)', red: 'rgba(255, 38, 38, 0.2)', white: 'rgba(255, 255, 255, 0.2)' }[colorScheme]
    : 'transparent';
}

function getFilledBackground(colorScheme, hovered, disabled) {
  return disabled ? colors.disabled : hovered ? colors[`${colorScheme}Light`] : colors[colorScheme];
}

function getColor({ variant, colorScheme, disabled }) {
  if (variant === 'filled') return colors.white;

  return disabled ? colors.disabled : colors[colorScheme];
}

function getCursor({ disabled }) {
  return disabled ? 'not-allowed' : 'pointer';
}

function getBoxShadow(props, { focused = false } = {}) {
  if (!focused) return 'none';

  const { colorScheme } = props;
  const color = { primary: 'rgba(90, 76, 67, 0.3)', secondary: 'rgba(195, 186, 133, 0.3)', red: 'rgba(255, 38, 38, 0.3)', white: 'rgba(255, 255, 255, 0.3)' }[colorScheme];

  return `0 0 0 0.25rem ${color}`;
}

function getMainPadding({ size, validChildren }) {
  return validChildren ? dimensions.button.padding[size] : '0.25rem';
}

function getMainIconMarginRight({ validChildren }) {
  return validChildren ? '0.5rem' : 0;
}

function getRippleColor() {
  return 'rgba(255, 255, 255, 0.7)';
}
