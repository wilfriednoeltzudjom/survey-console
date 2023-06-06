import styled from 'styled-components';

import colors from '../../../config/colors';
import durations from '../../../config/durations';
import { fontSizes } from '../../../config/sizes';
import { getButtonCursor } from '../../../_helpers/library.helper';

export default styled.button`
  display: inline-block;
  width: 100%;
  border: none;
  color: ${getColor};
  background: ${getBackgroundColor};
  font-size: ${fontSizes.md};
  transition: all ${durations.button.transition} ease-in-out;
  cursor: ${getButtonCursor};

  :focus {
    outline: none;
    border: none;
  }

  :hover {
    background: ${(props) => getBackgroundColor(props, { hovered: true })};
  }

  > main {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    > .icon {
      margin-right: 0.5rem;
    }
  }
`;

function getBackgroundColor(props, { hovered = false } = {}) {
  const { disabled } = props;

  return disabled ? colors.white : hovered ? 'rgba(90, 76, 67, 0.2)' : colors.white;
}

function getColor({ disabled }) {
  return disabled ? colors.disabled : colors.black;
}
