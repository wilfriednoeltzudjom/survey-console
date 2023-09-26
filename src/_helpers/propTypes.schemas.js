import PropTypes from 'prop-types';

export const routePropTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
};

export const fieldPropTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'tel', 'password', 'select', 'checkbox', 'radio', 'textarea', 'date', 'datetime', 'upload']),
  name: PropTypes.string,
  label: PropTypes.string,
  comment: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  minDate: PropTypes.any,
  maxDate: PropTypes.any,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.element,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(['md', 'lg']),
  clearIconShown: PropTypes.bool,
  index: PropTypes.number,
  preventDecimal: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export const formPropTypes = {
  mode: PropTypes.string,
  formState: PropTypes.shape({}),
  formErrors: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
