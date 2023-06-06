import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${getFlexDirection};
  justify-content: ${getJustifyContent};
  align-items: ${getAlignItems};

  > * {
    :not(:last-child) {
      margin-right: ${getMarginRight};
    }

    :not(:last-child) {
      margin-bottom: ${getMarginBottom};
    }
  }
`;

function getFlexDirection({ orientation }) {
  return { horizontal: 'row', vertical: 'column' }[orientation];
}

function getJustifyContent({ justify }) {
  return justify;
}

function getAlignItems({ align }) {
  return align;
}

function getMarginRight({ orientation, spacing }) {
  return { horizontal: String(spacing).concat('rem'), vertical: 0 }[orientation];
}

function getMarginBottom({ orientation, spacing }) {
  return { horizontal: 0, vertical: String(spacing).concat('rem') }[orientation];
}
