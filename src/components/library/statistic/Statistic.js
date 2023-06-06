import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';

import { isValidValue } from '../../../_helpers/dataValidator.helper';
import { formatAmount } from '../../../_helpers/types.helper';

import StatisticStyled from './Statistic.styled';

export function Statistic({ variant, label, content, placeholder, value, total, progressShown = true }) {
  const props = { variant, content, placeholder, value, total };

  return (
    <StatisticStyled {...props}>
      <div>
        {variant === 'count' && progressShown && <div className="progress" />}
        <header>{label}</header>
        <main>{displayContent(props)}</main>
      </div>
    </StatisticStyled>
  );
}
Statistic.propTypes = {
  variant: PropTypes.oneOf(['default', 'count', 'percentage', 'amount', 'weight', 'temperature']),
  label: PropTypes.string.isRequired,
  content: PropTypes.element,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  total: PropTypes.number,
  progressShown: PropTypes.bool,
};

function displayContent({ variant, content, placeholder = '--', value, total }) {
  const valueSuffix = { count: `/ ${total}`, amount: 'fcfa', percentage: '%', weight: 'kg', temperature: '°c' }[variant];

  return (
    <>
      {isValidElement(content) ? cloneElement(content) : <span>{isValidValue(value) ? formatValue(value, { variant }) : placeholder}</span>}
      {valueSuffix && <span>{valueSuffix}</span>}
    </>
  );
}

function formatValue(value, { variant }) {
  return variant === 'amount' ? formatAmount(value) : value;
}
