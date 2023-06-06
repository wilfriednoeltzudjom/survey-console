import styled, { keyframes } from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import zIndices from '../../../config/zIndices';

const animation = keyframes`
  to {
    transform: scale(1) rotateX(180deg);
  }
`;

export default styled.div`
  display: flex;
  width: ${dimensions.dialog.width};
  height: 20rem;
  justify-content: center;
  position: relative;
  z-index: ${zIndices.dialog};
  transform-style: preserve-3d;
  transform: scale(0.5);
  animation: ${animation} 500ms forwards;

  > .front,
  > .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: ${dimensions.defaults.radius.large};
    background: ${colors.white};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    backface-visibility: hidden;

    > main {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: ${colors.black};

      > .icon {
        margin-bottom: 1rem;
      }

      > span {
        > b {
          font-weight: 500;
        }
      }
    }

    > footer {
      display: flex;
      justify-content: center;
      margin: 1.5rem 0 0 0;
    }
  }

  > .front {
    > * {
      opacity: 0;
      visibility: hidden;
    }
  }

  > .back {
    transform: rotateX(180deg);
  }
`;
