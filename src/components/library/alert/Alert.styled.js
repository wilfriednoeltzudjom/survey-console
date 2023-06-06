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
  width: ${dimensions.modal.width.sm};
  padding: 2rem;
  border-radius: ${dimensions.defaults.radius.large};
  background: ${colors.white};
  transform: scale(0.8);
  animation: ${pulse} 500ms forwards;
  z-index: ${zIndices.alert};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  > header {
    display: flex;
    align-items: baseline;

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
    text-align: center;

    > b {
      font-weight: 500;
    }
  }

  > footer {
    margin: 2rem 0 0 0;
    display: flex;
    justify-content: center;
  }
`;
