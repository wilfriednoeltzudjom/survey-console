import styled from 'styled-components';

import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';

export default styled.div`
  min-height: 100vh;
  background: ${getBackground};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;

  > main {
    z-index: 0;
    min-height: 100vh;
  }

  &.private {
    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: ${dimensions.banner.height};
      background: ${colors.primaryDark};
    }
  }
`;

function getBackground({ variant }) {
  return { public: colors.background, private: colors.background }[variant];
}
