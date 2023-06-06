import styled from 'styled-components';

import colors from '../../../../config/colors';
import { fontSizes } from '../../../../config/sizes';

export default styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;

    :not(:last-child) {
      margin-right: 1rem;
    }

    > a {
      display: inline-block;
      color: ${colors.white};
      font-size: ${fontSizes.sm};
      font-weight: 500;
      margin-right: 1rem;

      &.selected {
        color: ${colors.disabled};
        text-decoration: none;
        cursor: not-allowed;
      }
    }
  }
`;
