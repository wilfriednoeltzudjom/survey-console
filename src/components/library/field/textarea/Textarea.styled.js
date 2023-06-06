import styled from 'styled-components';

import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import durations from '../../../../config/durations';
import { fontSizes } from '../../../../config/sizes';
import { getFontWeight, getInputBackground, getInputCursor } from '../../../../_helpers/library.helper';

export default styled.div`
  display: ${getDisplay};

  > label {
    display: block;
    font-size: 1rem;
    color: ${colors.black};
    margin-bottom: 0.25rem;
  }

  :focus {
    border-color: ${colors.primary};
  }

  > main {
    position: relative;
    display: flex;
    width: ${getInputWidth};
    justify-content: center;
    align-items: center;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${colors.input.border.default};
      border-radius: ${dimensions.defaults.radius.medium};
      background: ${getInputBackground};
      transition: all ${durations.input.transition} ease;
      z-index: -1;
    }

    > textarea {
      display: inline-block;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      padding: ${dimensions.input.padding};
      font-size: ${fontSizes.md};
      font-weight: ${getFontWeight};
      background: none;
      border: none;
      border-radius: ${dimensions.defaults.radius.medium};
      cursor: ${getInputCursor};

      :focus {
        outline: 0;
        border: none;

        + div {
          border-color: ${colors.primary};
        }
      }

      ::placeholder {
        color: ${colors.input.placeholder};
      }
    }
  }
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getInputWidth({ fluid }) {
  return fluid ? '100%' : 'initial';
}
