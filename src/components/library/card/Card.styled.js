import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';

export default styled.div`
  background: ${colors.white};
  border-radius: ${dimensions.defaults.radius.large};
  padding: ${dimensions.card.padding};
  box-shadow: 0 0 4px 0 rgba(180, 159, 145, 0.2);
`;
