import styled from 'styled-components';
import zIndices from '../../../config/zIndices';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${zIndices.loading};
`;
