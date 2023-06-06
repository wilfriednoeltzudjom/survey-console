import { keyframes } from 'styled-components';

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

export const zoomIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const zoomOut = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;
