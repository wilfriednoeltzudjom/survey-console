import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import { fontSizes } from '../../../config/sizes';

export default styled.div`
  display: flex;

  > button {
    border: none;
    border-radius: ${dimensions.defaults.radius.medium};
    width: ${dimensions.button.width.md};
    height: ${dimensions.button.width.md};
    background: ${getBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
    }

    &.page {
      font-size: ${fontSizes.sm};

      :hover {
        background: ${() => getBackground({ hovered: true })};
      }

      :disabled {
        background: ${() => getBackground({ disabled: true })};
        color: ${colors.white};
        font-weight: 500;

        &:hover {
          background: ${() => getBackground({ hovered: true, disabled: true })};
        }
      }
    }

    &.navigation {
      :disabled {
        color: ${colors.disabled};
      }
    }
  }
`;

function getBackground({ hovered = false, disabled = false } = {}) {
  return disabled ? colors.primary : hovered ? colors.primaryOverlay : colors.white;
}
