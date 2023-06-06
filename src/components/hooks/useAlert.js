import { useContext, useCallback } from 'react';

import { AlertContext } from '../providers/Alert';

export default function useAlert() {
  const { alertShown, alertArgs, setAlertShown, setAlertArgs } = useContext(AlertContext);

  const showAlert = useCallback((dialogArgs = {}) => {
    setAlertShown(true);
    setAlertArgs(dialogArgs);
  }, []);

  const hideAlert = useCallback(() => {
    setAlertShown(false);
    setAlertArgs({});
  }, []);

  return { alertShown, alertArgs, showAlert, hideAlert };
}
