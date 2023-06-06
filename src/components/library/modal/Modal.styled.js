import styled, { keyframes } from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import zIndices from '../../../config/zIndices';

const pulse = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;
  width: ${getWidth};
  max-height: calc(100vh - 10rem);
  padding: 2rem 1rem 1rem 1rem;
  border-radius: ${dimensions.defaults.radius.large};
  background: ${colors.white};
  transform: scale(0.8);
  animation: ${pulse} 400ms forwards;
  z-index: ${zIndices.modal};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  > header {
    display: flex;
    align-items: baseline;
    padding: 0 1rem;

    > span {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-right: 0.75rem;

      ::after {
        content: '';
        width: 100%;
        height: 1px;
        margin-top: 0.5rem;
        background: ${colors.divider};
      }
    }
  }

  > main {
    margin: 1.5rem 0 0 0;
    flex: 1;
    overflow-y: auto;
    padding-bottom: 1rem;

    scrollbar-width: ${dimensions.scrollbar.width};
    scrollbar-color: ${colors.scrollbar.thumb.default} ${colors.scrollbar.background};
    ::-webkit-scrollbar {
      width: ${dimensions.scrollbar.width};
    }
    ::-webkit-scrollbar-track {
      background: ${colors.scrollbar.background};
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.scrollbar.thumb.default};
      border-radius: ${dimensions.scrollbar.borderRadius};
      max-height: ${dimensions.scrollbar.maxHeight};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.scrollbar.thumb.hover};
    }
  }

  > footer {
    margin: 1.5rem 0 0 0;
    display: flex;
    justify-content: center;
  }
`;

function getWidth({ size }) {
  return dimensions.modal.width[size];
}
