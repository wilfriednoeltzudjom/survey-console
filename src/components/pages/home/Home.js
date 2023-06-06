import React, { Suspense, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProfile } from '../../../store/auth/auth.slice';
import { hideDialog } from '../../../store/ui/dialog.slice';
import { homePrivateRoutes, ROUTE_SIGN_IN } from '../../../routes';
import { isEmptyObject } from '../../../_helpers/dataValidator.helper';
import sessionHelper from '../../../_helpers/session.helper';

import { Container, ErrorBoundary, Header, PrivateRoute, Viewport } from '../../helpers';
import { Alert, Dialog, Loading } from '../../library';
import useAlert from '../../hooks/useAlert';

export default function Home() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.core.authState);
  const { successDialogShown, failureDialogShown, dialogArgs } = useSelector((state) => state.ui.dialogState);
  const { requesting } = useSelector((state) => state.ui.formState);
  const { alertShown, alertArgs, hideAlert } = useAlert();

  useEffect(() => {
    if (sessionHelper.isAuthenticated()) {
      dispatch(getProfile());
    }
  }, []);

  function handleHideDialog() {
    dispatch(hideDialog());
  }

  if (isEmptyObject(profile) && !sessionHelper.isAuthenticated()) return <Redirect to={ROUTE_SIGN_IN} />;

  return (
    <>
      <Viewport>
        <Container>
          <Header />

          <Suspense fallback={<div />}>
            <ErrorBoundary>
              <Switch>{renderHomePrivateRoutes()}</Switch>
            </ErrorBoundary>
          </Suspense>
        </Container>
      </Viewport>

      <Alert shown={alertShown} {...alertArgs} onHide={hideAlert} />

      <Dialog shown={successDialogShown} variant="success" {...dialogArgs} onHide={handleHideDialog} />
      <Dialog shown={failureDialogShown} variant="failure" {...dialogArgs} onHide={handleHideDialog} />

      <Loading shown={requesting} />
    </>
  );
}

function renderHomePrivateRoutes() {
  return homePrivateRoutes.map(({ key, ...restProps }) => <PrivateRoute key={key} {...restProps} />);
}
