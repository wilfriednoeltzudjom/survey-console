import styled from 'styled-components';
import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import durations from '../../../../config/durations';
import { fontSizes } from '../../../../config/sizes';

export default styled.nav`
  display: flex;
  margin-bottom: 1.5rem;

  > a {
    display: inline-block;
    padding: ${dimensions.nav.padding};
    min-height: ${dimensions.button.minHeight.md};
    color: ${colors.white};
    font-size: ${fontSizes.md};
    font-weight: 500;
    text-decoration: none;
    background: transparent;
    border-radius: ${dimensions.defaults.radius.medium};
    transition: all ${durations.button.transition} ease-in-out;
    cursor: pointer;

    :hover:not(.active) {
      background: rgba(255, 255, 255, 0.1);
    }

    &.active {
      color: ${colors.disabled};
      cursor: not-allowed;
    }

    :not(:last-child) {
      margin-right: 0.75rem;
    }

    &.disabled {
      cursor: not-allowed;

      :hover {
        background: transparent;
      }
    }
  }
`;
