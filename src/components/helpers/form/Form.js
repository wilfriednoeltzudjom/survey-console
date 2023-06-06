import React from 'react';
import PropTypes from 'prop-types';

import FormStyled, {
  FormHeaderStyled,
  FormTitleStyled,
  FormSubTitleStyled,
  FormBodyStyled,
  FormGroupStyled,
  FormRowStyled,
  FormFooterStyled,
  FormDivider,
  FormText,
} from './Form.styled';

export function Form({ variant = 'private', children, onSubmit }) {
  const props = { variant };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (onSubmit) onSubmit(evt);
  }

  return (
    <FormStyled className={variant} {...props} noValidate onSubmit={handleSubmit}>
      {children}
    </FormStyled>
  );
}
Form.propTypes = {
  variant: PropTypes.oneOf(['public', 'private']),
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
Form.Header = FormHeaderStyled;
Form.Title = FormTitleStyled;
Form.SubTitle = FormSubTitleStyled;
Form.Body = FormBodyStyled;
Form.Footer = FormFooterStyled;
Form.Row = FormRowStyled;
Form.Divider = FormDivider;
Form.Text = FormText;

function FormGroup({ fluid = false, variant = '', justify = '', children }) {
  const props = { fluid, variant, justify };

  return (
    <FormGroupStyled className={variant} {...props}>
      {children}
    </FormGroupStyled>
  );
}
FormGroup.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  variant: PropTypes.string,
};
Form.Group = FormGroup;
