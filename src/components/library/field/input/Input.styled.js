import styled from 'styled-components';

import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import durations from '../../../../config/durations';
import { fontSizes } from '../../../../config/sizes';
import zIndices from '../../../../config/zIndices';
import { getFontWeight, getInputCursor, getInputBackground } from '../../../../_helpers/library.helper';

export default styled.div`
  display: ${getDisplay};

  > label {
    display: block;
    font-size: ${fontSizes.md};
    color: ${colors.black};
    margin-bottom: 0.25rem;

    > span {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: ${fontSizes.sm};
      color: ${colors.gray};
    }
  }

  > main {
    position: relative;
    display: flex;
    width: ${getInputWidth};
    justify-content: center;
    align-items: center;
    min-height: ${getInputMinHeight};

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${colors.input.border.default};
      border-radius: ${dimensions.defaults.radius.medium};
      min-height: ${getInputMinHeight};
      background: ${getInputBackground};
      transition: all ${durations.input.transition} ease;
    }

    > input {
      display: inline-block;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      padding: ${dimensions.input.padding};
      font-size: ${getInputFontSize};
      font-weight: ${getFontWeight};
      background: transparent;
      border: none;
      border-radius: ${dimensions.defaults.radius.medium};
      cursor: ${getInputCursor};
      z-index: ${zIndices.input};

      &.icon {
        padding-left: 2.75rem;
      }

      :focus {
        outline: 0;
        border: none;

        + div {
          border-color: ${colors.primary};
        }

        + div + span {
          color: ${colors.primary};
        }
      }

      ::placeholder {
        color: ${colors.input.placeholder};
      }

      &[type='number'] {
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        appearance: textfield;
        -moz-appearance: textfield;
      }
    }

    .icon {
      z-index: ${zIndices.input};
    }

    span {
      position: absolute;
      top: 50%;
      left: 0.75rem;
      transform: translateY(-50%);
      color: ${colors.input.placeholder};
      transition: all ${durations.input.transition} ease;
    }
  }
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getInputMinHeight({ size }) {
  return dimensions.input.minHeight[size];
}

function getInputWidth({ fluid }) {
  return fluid ? '100%' : 'initial';
}

function getInputFontSize({ size }) {
  return { md: fontSizes.md, lg: fontSizes.xxl }[size];
}
