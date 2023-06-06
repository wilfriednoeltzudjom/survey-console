import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { publicRoutes } from '../routes';

import AlertProvider from './providers/Alert';
import AppStyled from './App.styled';
import { PublicRoute } from './helpers/routes';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function App() {
  const { width } = useWindowDimensions();

  return isShowAppContentSupportedByScreen(width) ? (
    <>
      <AppStyled>
        <AlertProvider>
          <Router>
            <Switch>{renderPublicRoutes()}</Switch>
          </Router>
        </AlertProvider>
      </AppStyled>
    </>
  ) : (
    <div>Hello</div>
  );
}

function renderPublicRoutes() {
  return publicRoutes.map(({ key, ...restProps }) => <PublicRoute key={key} {...restProps} />);
}

function isShowAppContentSupportedByScreen(width) {
  return width > 1200;
}
