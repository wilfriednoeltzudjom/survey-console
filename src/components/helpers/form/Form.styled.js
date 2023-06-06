import styled from 'styled-components';
import colors from '../../../config/colors';
import { fontSizes } from '../../../config/sizes';

export default styled.form`
  margin: 0.5rem 0;

  &.public {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const FormHeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

export const FormTitleStyled = styled.span`
  font-size: ${fontSizes.lg};
  font-weight: 600;
  color: ${colors.primary};
`;

export const FormSubTitleStyled = styled.span`
  font-size: ${fontSizes.md};
  color: ${colors.gray};
  margin-top: 1rem;
`;

export const FormGroupStyled = styled.div`
  width: ${({ fluid }) => (fluid ? '100%' : 'initial')};
  margin-bottom: ${({ margin }) => (margin ? `${margin}rem` : '1rem')};

  &.inline {
    display: flex;
    justify-content: ${({ justify }) => justify || 'flex-start'};

    > * {
      :not(:last-child) {
        margin-right: ${({ gap }) => (gap ? `${gap}rem` : '0.25rem')};
      }
    }
  }
`;

export const FormRowStyled = styled.div`
  display: grid;
  grid-template-columns: ${({ children, radio }) => radio || `repeat(${children.length}, 1fr)`};
  gap: 1rem;
`;

export const FormBodyStyled = styled.main`
  padding: ${({ variant }) => (variant === 'public' ? 0 : '0 1rem')};

  > * {
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const FormFooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  > * {
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const FormDivider = styled.div`
  width: 100%;
  height: 1rem;
  margin: 0.5rem 0;
`;

export const FormText = styled.span`
  display: inline-block;
  color: ${colors.gray};
  margin-bottom: 0.25rem;
`;
