import styled from 'styled-components';

import colors from '../../../config/colors';
import durations from '../../../config/durations';
import { fontSizes } from '../../../config/sizes';

export default styled.a`
  position: relative;
  display: inline-block;
  color: ${colors.primary};
  font-size: ${fontSizes.sm};
  font-weight: 600;
  transition: all ${durations.button.transition} ease-in-out;
  cursor: pointer;
  text-decoration: none;

  ::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.primary};
    transition: all ${durations.button.transition} ease-in-out;
  }

  :hover {
    color: ${colors.primaryLight};

    ::after {
      width: 0;
      opacity: 0.8;
      transition: all ${durations.button.transition} ease-in-out;
    }
  }
`;
