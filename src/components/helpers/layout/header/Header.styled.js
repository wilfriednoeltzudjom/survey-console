import styled from 'styled-components';
import colors from '../../../../config/colors';
import { fontSizes } from '../../../../config/sizes';

export default styled.div`
  display: flex;
  flex-direction: column;

  > main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > section {
      display: flex;
      align-items: baseline;

      > span {
        font-size: ${fontSizes.xl};
        font-weight: 600;
        color: ${colors.white};
        margin-right: 1.5rem;
      }
    }
  }

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background: rgba(236, 236, 236, 0.07);
    margin: 1.25rem 0 1rem 0;
  }
`;
