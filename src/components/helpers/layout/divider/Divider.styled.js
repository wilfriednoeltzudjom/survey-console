import styled from 'styled-components';

import dimensions from '../../../../config/dimensions';

export const DividerStyled = styled.div`
  width: ${getDividerWidth};
  height: ${getDividerHeight};
`;

function getDividerWidth({ orientation, size }) {
  if (orientation === 'horizontal') return '100%';

  return dimensions.divider.width[size];
}

function getDividerHeight({ orientation, size }) {
  if (orientation === 'vertical') return '100%';

  return dimensions.divider.height[size];
}
