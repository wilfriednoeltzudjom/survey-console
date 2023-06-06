import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import { fontSizes } from '../../../config/sizes';

export default styled.div`
  display: inline-block;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: ${dimensions.statistic.minWidth};
    min-height: ${dimensions.statistic.minHeight};
    background: ${colors.card};
    border-radius: ${dimensions.defaults.radius.large};
    padding: ${dimensions.statistic.padding};

    > header {
      color: ${colors.gray};
      font-size: ${fontSizes.sm};
    }

    > main {
      display: flex;
      align-items: baseline;

      > span {
        display: inline-block;

        :nth-child(1) {
          font-size: ${fontSizes.xxl};
          font-weight: 600;
        }

        :nth-child(2) {
          padding-left: 0.45rem;
          color: ${colors.gray};
          text-transform: lowercase;
        }
      }

      > div {
        width: 5.5rem;

        input {
          background: ${colors.white};
        }
      }
    }

    > .progress {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.5rem;
      background: ${colors.progressBar};
      border-radius: ${dimensions.defaults.radius.large} ${dimensions.defaults.radius.large} 0 0;
      display: flex;

      ::after {
        content: '';
        width: ${getProgressWidth};
        height: 100%;
        background: ${colors.primary};
        border-radius: ${dimensions.defaults.radius.large} ${dimensions.defaults.radius.large} 0 0;
      }
    }
  }
`;

function getProgressWidth({ value, total }) {
  return `${Math.floor((value / total) * 100)}%`;
}
