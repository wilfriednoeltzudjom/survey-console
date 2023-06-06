import styled from 'styled-components';

import dimensions from '../../../../config/dimensions';

export default styled.div`
  max-width: ${dimensions.container.maxWidth};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1.5rem 0 3.5rem 0;

  &.public {
    min-height: 100vh;
    align-items: center;
    padding: 5rem 0 2.5rem 0;

    > header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;

      > span {
        margin-top: 0.25rem;
      }
    }

    > .card {
      width: ${dimensions.public.card.width};
    }
  }
`;
