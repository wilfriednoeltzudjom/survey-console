import styled from 'styled-components';
import colors from '../../../config/colors';
import { fontSizes } from '../../../config/sizes';

export default styled.span`
  display: block;
  margin-top: 0.25rem;
  color: ${colors.error};
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;
