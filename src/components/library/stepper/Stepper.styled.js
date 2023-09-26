import styled from 'styled-components';

import colors from '../../../config/colors';
import zIndices from '../../../config/zIndices';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem 2.5rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: ${zIndices.sticky};
  background: ${colors.white};
`;
