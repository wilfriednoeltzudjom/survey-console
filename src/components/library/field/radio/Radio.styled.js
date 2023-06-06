import styled from 'styled-components';

import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import durations from '../../../../config/durations';
import { getInputCursor } from '../../../../_helpers/library.helper';

export default styled.div`
  position: relative;
  display: inline-block;

  > input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;

    :checked {
      + label {
        > span {
          :first-child {
            background-color: ${colors.primary};
          }
        }
      }
    }
  }

  > label {
    cursor: ${getInputCursor};

    > span {
      display: inline-block;
      color: ${getTextColor};

      :first-child {
        margin-right: 0.5rem;
        width: ${dimensions.checkbox.width};
        height: ${dimensions.checkbox.height};
        border: 2px solid ${colors.input.border.default};
        border-radius: 50%;
        background-color: ${colors.white};
        transition: all ${durations.input.transition} ease-in-out;
      }
    }
  }
`;

function getTextColor({ disabled }) {
  return disabled ? colors.disabled : colors.primary;
}
