import styled from 'styled-components';
import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import { fontSizes } from '../../../config/sizes';

export default styled.div`
  > header,
  > footer {
    display: flex;
    justify-content: space-between;
  }

  > main {
    margin: 1.5rem 0 1.5rem 0;

    > table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid ${colors.table.border};

      > thead {
        > tr {
          background: ${colors.table.header};

          > th {
            padding: ${dimensions.table.header.padding};
            color: ${colors.white};
            font-size: ${fontSizes.md};
            font-weight: 500;

            > main {
              display: flex;
              align-items: center;

              > span {
                margin-right: 0.35rem;
              }
            }
          }
        }
      }

      > tbody {
        > tr {
          :nth-child(odd) {
            background: ${colors.table.cell.default};
          }
          :nth-child(even) {
            background: ${colors.table.cell.filled};
          }

          > td {
            padding: ${getBodyCellPadding};
          }
        }
      }
    }
  }
`;

function getBodyCellPadding({ actions }) {
  return actions ? dimensions.table.cell.padding : dimensions.table.header.padding;
}
