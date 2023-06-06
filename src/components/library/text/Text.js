import React from 'react';
import PropTypes from 'prop-types';

import TextStyled from './Text.styled';

export function Text({ colorScheme = 'black', size = 'md', weight = 'regular', highlight = false, textAppearance = 'none', children }) {
  const props = { colorScheme, size, weight, highlight, textAppearance };

  return <TextStyled {...props}>{children}</TextStyled>;
}
Text.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.oneOf(['primary', 'secondary', 'black', 'white', 'gray', 'error']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  weight: PropTypes.oneOf(['regular', 'medium', 'bold', 'black']),
  highlight: PropTypes.bool,
  textAppearance: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize']),
};

function Label(props) {
  return <Text {...props} colorScheme="gray" />;
}

function Title(props) {
  return <Text {...props} size="lg" weight="bold" />;
}

function SubTitle(props) {
  return <Text {...props} size="sm" colorScheme="gray" />;
}

Text.Label = Label;
Text.Title = Title;
Text.SubTitle = SubTitle;
