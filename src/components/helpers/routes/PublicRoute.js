import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import sessionHelper from '../../../_helpers/session.helper';

export function PublicRoute({ path, redirectTo, component: Component, ...restOfRouteProps }) {
  return (
    <Route
      path={path}
      {...restOfRouteProps}
      render={(props) => {
        if (sessionHelper.isAuthenticated() && path !== '/') return <Redirect to="/" />;

        return redirectTo ? <Redirect to={redirectTo} /> : <Component {...props} />;
      }}
    />
  );
}
PublicRoute.propTypes = {
  path: PropTypes.string,
  redirectTo: PropTypes.string,
  component: PropTypes.elementType,
};
