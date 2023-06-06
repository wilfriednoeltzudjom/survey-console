import styled from 'styled-components';

import colors from '../../../config/colors';

export default styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainCardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  > main {
    flex: 1;
    display: flex;
    flex-direction: column;

    > section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ::after {
      content: '';
      width: 100%;
      height: 1px;
      background: ${colors.divider};
      margin-top: 0.625rem;
    }
  }

  > aside {
    padding-left: 0.75rem;
  }
`;

export const MainCardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
`;

export const MainCardFooterStyled = styled.div`
  padding-top: 2rem;
`;
