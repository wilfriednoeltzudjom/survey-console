import styled from 'styled-components';

import colors from '../../../config/colors';

export default styled.div`
  width: 100%;
  height: 2px;
  background: ${getBackgroundColor};
  margin: 0 0.75rem 1.75rem 0.75rem;
  flex: 1;
`;

function getBackgroundColor({ position, activePosition }) {
  return activePosition > position ? colors.primary : colors.gray;
}
