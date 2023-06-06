import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import sessionHelper from '../../../_helpers/session.helper';
import { ROUTE_SIGN_IN } from '../../../routes';

export function PrivateRoute({ component: Component, redirectTo, ...restOfRouteProps }) {
  return (
    <Route
      {...restOfRouteProps}
      render={(props) => {
        if (!sessionHelper.isAuthenticated()) return <Redirect to={ROUTE_SIGN_IN} />;

        return redirectTo ? <Redirect to={formatRedirectTo(props, redirectTo)} /> : <Component {...props} />;
      }}
    />
  );
}
PrivateRoute.propTypes = {
  path: PropTypes.string,
  redirectTo: PropTypes.string,
  component: PropTypes.elementType,
};

function formatRedirectTo(props, redirectTo) {
  const {
    match: { params = {} },
  } = props;
  if (params.surveyId) return redirectTo.replace(':surveyId', params.surveyId);

  return redirectTo;
}
