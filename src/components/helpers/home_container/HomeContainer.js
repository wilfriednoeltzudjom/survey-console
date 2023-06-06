import React from 'react';
import PropTypes from 'prop-types';

import navbarHelper from '../../../_helpers/navbar.helper';

import { Navbar } from '../layout/navbar';
import HomeContainerStyled from './HomeContainer.styled';

export function HomeContainer({ children }) {
  return (
    <HomeContainerStyled>
      <header>
        <Navbar items={navbarHelper.getHomeNavItems()} />
      </header>
      <main>{children}</main>
    </HomeContainerStyled>
  );
}
HomeContainer.propTypes = {
  children: PropTypes.node,
};
