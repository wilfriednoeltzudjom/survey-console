import styled from 'styled-components';

import colors from '../../../config/colors';

export default styled.div`
  border: ${getBorder};

  > div {
    :not(.empty) {
      :nth-child(odd) {
        background: ${colors.list.item.filled};
      }

      :nth-child(even) {
        background: ${colors.list.item.default};
      }
    }

    &.empty {
      display: flex;
      flex-direction: column;
      text-align: center;

      > span {
        :not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

function getBorder({ children }) {
  return children.length > 0 ? `1px solid ${colors.divider}` : 'none';
}
