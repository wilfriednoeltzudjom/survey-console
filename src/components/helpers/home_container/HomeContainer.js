import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import navbarHelper from '../../../_helpers/navbar.helper';

import { Navbar } from '../layout/navbar';
import HomeContainerStyled from './HomeContainer.styled';

export function HomeContainer({ children }) {
  const { profile = {} } = useSelector((state) => state.core.authState);

  return (
    <HomeContainerStyled>
      <header>
        <Navbar items={navbarHelper.getHomeNavItems({ profile })} />
      </header>
      <main>{children}</main>
    </HomeContainerStyled>
  );
}
HomeContainer.propTypes = {
  children: PropTypes.node,
};
