import styled, { keyframes } from 'styled-components';

import colors from '../../../config/colors';

const bounce = keyframes`
  from {
    width: 0.1rem;
    height: 0.1rem;
    opacity: 1;
    transform: translate3d(0);
  }
  to {
    width: 3rem;
    height: 3rem;
    opacity: 0.2;
    transform: translate3d(0, -1rem, 0);
  }
`;

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  > span {
    background: ${({ colorScheme }) => colors[colorScheme] || '#ffffff'};
    border-radius: 50%;
    margin: 5rem 0.5rem;
    animation: ${bounce} 0.6s infinite alternate;

    :nth-child(2) {
      animation-delay: 0.2s;
    }

    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
