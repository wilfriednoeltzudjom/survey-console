import styled from 'styled-components';

import { zoomIn, zoomOut } from '../../../config/animations';
import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import durations from '../../../config/durations';
import zIndices from '../../../config/zIndices';

export default styled.div`
  display: inline-block;
  position: relative;

  > footer {
    position: absolute;
    top: calc(100% + 0.25rem);
    right: 0;
    min-width: 100%;
    background: ${colors.white};
    border-radius: ${dimensions.defaults.radius.large};
    padding: 0.5rem 0;
    box-shadow: 0 0 ${dimensions.card.blurRadius} 0 rgba(90, 76, 67, 0.1);
    transform-origin: 100% 0;
    transform: scale(0);
    z-index: ${zIndices.hide};
  }

  &.shown {
    > footer {
      animation: ${zoomIn} ${durations.default} forwards;
      z-index: ${zIndices.popover};
    }
  }

  &.hidden {
    > footer {
      animation: ${zoomOut} 200ms forwards;
      z-index: ${zIndices.hide};
    }
  }
`;
