import styled from 'styled-components';
import colors from '../../../config/colors';

export default styled.div`
  > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      background: ${getBackgroundColor};
      border: 1px solid ${getBackgroundColor};
      border-radius: 50%;
      color: ${colors.white};
      font-weight: ${getFontWeight};
    }

    > span {
      display: inline-block;
      margin-top: 0.5rem;
      color: ${getTextColor};
      font-weight: ${getFontWeight};
    }
  }
`;

function getBackgroundColor({ active }) {
  return active ? colors.primary : colors.gray;
}

function getFontWeight({ active }) {
  return active ? 500 : 400;
}

function getTextColor({ active }) {
  return active ? colors.primary : colors.gray;
}
