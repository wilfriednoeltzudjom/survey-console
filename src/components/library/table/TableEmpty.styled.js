import styled from 'styled-components';

import colors from '../../../config/colors';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  color: ${colors.gray};

  > .icon {
    margin-bottom: 1rem;
  }
`;
