import styled from 'styled-components';
import colors from '../../../config/colors';

import dimensions from '../../../config/dimensions';
import { fontSizes } from '../../../config/sizes';

export default styled.div`
  display: inline-block;
  min-height: ${dimensions.badge.minHeight};
  border: ${getBorder};
  border-radius: ${dimensions.defaults.radius.medium};
  padding: 0.25rem 0.5rem;
  background: ${getBackground};
  font-size: ${fontSizes.sm};
  font-weight: 500;
  color: ${getColor};

  > main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function getBorder({ variant, colorScheme }) {
  return variant === 'outlined' ? `2px solid ${colors[colorScheme]}` : 'none';
}

function getBackground({ variant, colorScheme }) {
  if (variant === 'outlined') return 'transparent';
  if (variant === 'filled') return colors[colorScheme];

  return {
    primary: 'rgba(90, 76, 67, 0.2)',
    secondary: 'rgba(195, 186, 133, 0.2)',
    gray: 'rgba(231, 152, 174, 0.2)',
    error: 'rgba(255, 38, 38, 0.2)',
    blue: 'rgba(0, 0, 255, 0.2)',
    yellow: 'rgba(255, 234, 0, 0.2)',
    purple: 'rgba(191, 64, 191, 0.2)',
  }[colorScheme];
}

function getColor({ variant, colorScheme }) {
  return variant === 'filled' ? colors.white : colors[colorScheme];
}
