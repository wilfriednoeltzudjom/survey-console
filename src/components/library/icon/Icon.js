import React from 'react';
import PropTypes from 'prop-types';

import IconStyled from './Icon.styled';
import { joinClassNames } from '../../../_helpers/library.helper';

export function Icon({ className, name, variant = 'outlined', size = 'md', colorScheme, animated = false, onClick }) {
  function handleClick(evt) {
    if (onClick) {
      evt.stopPropagation();
      onClick(evt);
    }
  }

  return (
    <IconStyled className={getClassName(className, variant, animated)} variant={variant} size={size} colorScheme={colorScheme} onClick={handleClick}>
      {getIconName(name)}
    </IconStyled>
  );
}
Icon.propTypes = {
  name: PropTypes.oneOf([
    'search',
    'expand',
    'close',
    'calendar',
    'download',
    'upload',
    'more',
    'delete',
    'edit',
    'arrow-left',
    'arrow-right',
    'inventory',
    'check-circle',
    'error-circle',
    'account',
    'logout',
    'print',
    'refresh',
  ]).isRequired,
  variant: PropTypes.oneOf(['outlined', 'filled']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  colorScheme: PropTypes.oneOf(['primary', 'gray', 'error', 'white', 'secondary']),
  animated: PropTypes.bool,
  onClick: PropTypes.func,
};

function getClassName(className, variant, animated) {
  const variantClassName = { outlined: 'material-icons-outlined', filled: 'material-icons' }[variant].concat(' icon');
  const animatedClassName = animated && 'animated';

  return joinClassNames(className, variantClassName, animatedClassName);
}

function getIconName(name) {
  return (
    {
      expand: 'expand_more',
      calendar: 'edit_calendar',
      download: 'file_download',
      upload: 'file_upload',
      more: 'more_vert',
      'arrow-left': 'chevron_left',
      'arrow-right': 'chevron_right',
      inventory: 'inventory_2',
      'check-circle': 'check_circle',
      'error-circle': 'cancel',
      account: 'account_circle',
    }[name] || name
  );
}
