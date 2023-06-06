import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { generateId } from '../../../_helpers/dataGenerator.helper';

import { Card } from '../card';
import MainCardStyled, { MainCardHeaderStyled, MainCardBodyStyled, MainCardFooterStyled } from './MainCard.styled';

export function MainCard({ children, variant = 'info', action, style = {} }) {
  const props = { variant };
  const defaultStyle = { display: 'inline-block', minWidth: '60%', maxWidth: '80%' };
  if (style.width) {
    delete defaultStyle.minWidth;
    delete defaultStyle.maxWidth;
  }

  return (
    <Card style={{ ...defaultStyle, ...style }}>
      <MainCardStyled {...props}>{children.map((child) => cloneElement(child, { ...props, action, key: generateId() }))}</MainCardStyled>
    </Card>
  );
}
MainCard.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['info', 'action']),
  action: PropTypes.element,
  style: PropTypes.shape({}),
};

function Header({ children, variant, action }) {
  return (
    <MainCardHeaderStyled variant={variant}>
      <main>
        <section>{children}</section>
      </main>
      {action && <aside>{action}</aside>}
    </MainCardHeaderStyled>
  );
}
Header.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['info', 'action']),
  action: PropTypes.element,
};

MainCard.Header = Header;
MainCard.Body = MainCardBodyStyled;
MainCard.Footer = MainCardFooterStyled;
