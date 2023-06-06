import styled, { keyframes } from 'styled-components';

import { zoomIn } from '../../../../config/animations';
import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import durations from '../../../../config/durations';
import zIndices from '../../../../config/zIndices';
import { getInputBackground, getInputCursor } from '../../../../_helpers/library.helper';
import { fontSizes } from '../../../../config/sizes';

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
  display: ${getDisplay};
  position: relative;

  > main {
    > label {
      display: block;
      font-size: 1rem;
      color: ${colors.black};
      margin-bottom: 0.25rem;

      > span {
        display: inline-block;
        font-size: ${fontSizes.sm};
        color: ${colors.gray};
        margin-bottom: 0.25rem;
      }
    }

    > div {
      display: ${getDisplay};
      border: 2px solid ${colors.input.border.default};
      border-radius: ${dimensions.defaults.radius.medium};
      min-height: ${dimensions.input.minHeight.md};
      padding: ${dimensions.input.padding};
      background: ${getInputBackground};
      transition: all ${durations.input.transition} ease-in-out;
      cursor: ${getInputCursor({ defaultCursor: 'text' })};

      &.content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > .content-placeholder {
          color: ${colors.input.placeholder};
        }

        &.green {
          background-color: ${colors.green};
        }

        &.red {
          background-color: ${colors.red};
        }

        > aside {
          justify-self: flex-end;
          display: flex;
          align-items: center;
          margin-left: 0.5rem;

          > .icon {
            transition: transform ${durations.default} ease;

            &.icon-expand {
              transform: ${getMainInnerDivIconTransform};
            }

            &.icon-close {
              margin-right: 0.5rem;
              animation: ${pulse} 400ms forwards;
              cursor: pointer;
            }
          }
        }
      }

      &.focused {
        border-color: ${colors.primary};
      }
    }
  }

  > footer {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 100%;
    background: ${colors.white};
    border-radius: ${dimensions.defaults.radius.large};
    padding: 0.5rem 0;
    box-shadow: 0 0 ${dimensions.card.blurRadius} 0 rgba(90, 76, 67, 0.1);
    transform-origin: 50% 0;
    transform: scale(0);
    animation: ${zoomIn} ${durations.default} forwards;
    z-index: ${zIndices.popover};

    > ul {
      list-style: none;

      > li {
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: all ${durations.button.transition} ease-in-out;

        :hover {
          background: rgba(195, 186, 133, 0.1);
        }

        &.green {
          background: ${colors.green};
          color: ${colors.white};
          font-weight: 500;
        }

        &.red {
          background: ${colors.red};
          color: ${colors.white};
          font-weight: 500;
        }

        &.green:hover {
          background: rgba(80, 200, 120, 0.8);
        }
        &.red:hover {
          background: rgba(255, 38, 38, 0.8);
        }
      }
    }
  }
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getMainInnerDivIconTransform({ shown }) {
  return shown ? 'rotate(180deg)' : 'none';
}
